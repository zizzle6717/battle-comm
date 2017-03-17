'use strict';

import env from '../../../envVariables';
import models from '../../models';
import fs from 'fs-extra';
import Boom from 'boom';
import im from 'imagemagick-stream';
import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';
import buildRPUpdateEmail from '../../email-templates/rpUpdate';
import buildRegistrationEmail from '../../email-templates/registrationSuccess';
import buildForgotPasswordEmail from '../../email-templates/forgotPassword';
import buildPasswordUpdatedEmail from '../../email-templates/passwordUpdated';

import createUserToken from '../../utils/createUserToken';
import createResetToken from '../../utils/createResetToken';
import verifyResetToken from '../../utils/verifyResetToken';
import userFunctions from '../../utils/userFunctions';

let generator = xoauth2.createXOAuth2Generator(env.email.XOAuth2);


// listen for token updates
// you probably want to store these to a db
generator.on('token', (token) => {});

let transporter = nodemailer.createTransport(({
  'service': 'Gmail',
  'auth': {
    'xoauth2': generator
  }
}));

// Product Route Configs
let users = {
  get: (request, reply) => {
    models.User.find({
        'where': {
          'id': request.params.id
        },
        'attributes': {
          'exclude': ['password']
        },
        'include': [{
            'model': models.UserNotification
          },
          {
            'model': models.UserPhoto
          },
          {
            'model': models.User,
            'as': 'Friends',
            'attributes': ['id', 'firstName', 'lastName', 'username', 'icon']
          },
          {
            'model': models.GameSystemRanking,
            'include': [{
                'model': models.GameSystem,
                'attributes': ['name']
              },
              {
                'model': models.FactionRanking,
                'include': [{
                  'model': models.Faction,
                  'attributes': ['name']
                }]
              }
            ]
          }
        ],
      })
      .then((response) => {
        if (response) {
          reply(response).code(200);
        } else {
          reply().code(404);
        }
      });
  },
  getAll: (request, reply) => {
    models.User.findAll()
      .then((products) => {
        reply(products).code(200);
      });
  },
  create: (request, reply) => {
    userFunctions.hashPassword(request.payload.password, (err, hash) => {
      models.User.create({
          'email': request.payload.email,
          'firstName': request.payload.firstName,
          'lastName': request.payload.lastName,
          'username': request.payload.username,
          'password': hash
        })
        .then((user) => {
          let defaultPath = __dirname + '/../../..' + env.uploadPath + 'players/profile_image_default.png';
          let path = __dirname + '/../../..' + env.uploadPath + 'players/' + user.id + '/playerIcon/' + 'profile_image_default.png';
          let thumbPath = __dirname + '/../../..' + env.uploadPath + 'players/' + user.id + '/playerIcon/thumbs/' + 'profile_image_default.png';

          // Create default image in folder
          fs.ensureFile(path, (err) => {
            let read1 = fs.createReadStream(defaultPath);
            let file = fs.createWriteStream(path);
            const resize = im().resize('100x100').quality(90);
            file.on('error', (err) => {
              console.log('Icon upload error' + err);
            });
            read1.pipe(file);
            read1.on('end', (err) => {
              fs.ensureFile(thumbPath, (err) => {
                let read2 = fs.createReadStream(defaultPath);
                let thumb = fs.createWriteStream(thumbPath);
                file.on('error', (err) => {
                  console.log('Thumb upload error.' + err);
                });
                read2.pipe(resize).pipe(thumb);
                read2.on('end', (err) => {
                  console.log('Default image created.');
                });
              });
            })
          });

          // Send confirmation e-mail
          let customerMailConfig = {
            'from': env.email.user,
            'to': user.email,
            'subject': `Welcome to Battle-Comm!`,
            'html': buildRegistrationEmail(user)
          };

          transporter.sendMail(customerMailConfig, (error, info) => {
            if (error) {
              console.log(error);
              reply('Somthing went wrong');
            } else {
              reply({
                'id_token': createUserToken(user),
                'id': user.id,
                'firstName': user.firstName,
                'lastName': user.lastName,
                'icon': user.icon,
                'member': user.member,
                'subscriber': user.subscriber,
                'tourneyAdmin': user.tourneyAdmin,
                'eventAdmin': user.eventAdmin,
                'newsContributor': user.newsContributor,
                'venueAdmin': user.venueAdmin,
                'clubAdmin': user.clubAdmin,
                'systemAdmin': user.systemAdmin
              }).code(201);
            };
          });
        })
        .catch((response) => {
          throw Boom.badRequest(response);
        })
    });
  },
  authenticate: (request, reply) => {
    reply({
      'id_token': createUserToken(request.pre.user),
      'id': request.pre.user.id,
      'firstName': request.pre.user.firstName,
      'lastName': request.pre.user.lastName,
      'icon': request.pre.user.icon,
      'member': request.pre.user.member,
      'subscriber': request.pre.user.subscriber,
      'tourneyAdmin': request.pre.user.tourneyAdmin,
      'eventAdmin': request.pre.user.eventAdmin,
      'newsContributor': request.pre.user.newsContributor,
      'venueAdmin': request.pre.user.venueAdmin,
      'clubAdmin': request.pre.user.clubAdmin,
      'systemAdmin': request.pre.user.systemAdmin
    }).code(201);
  },
  changePassword: (request, reply) => {
    models.User.find({
      'where': {
        'id': request.params.id
      }
    }).then((user) => {
      // Send forgot password e-mail
      let passwordUpdatedConfig = {
        'from': env.email.user,
        'to': request.payload.username,
        'subject': `Battle-Comm: Password Updated`,
        'html': buildPasswordUpdatedEmail()
      };

      transporter.sendMail(passwordUpdatedConfig, (error, info) => {
        if (error) {
          console.log(error);
          reply('Somthing went wrong');
        } else {
          userFunctions.hashPassword(request.payload.newPassword, (err, hash) => {
            user.updateAttributes({
              'password': hash
            }).then((user) => {
              reply(user).code(200);
            })
          });
        };
      });
    });
  },
  resetPassword: (request, reply) => {
    let token = createResetToken(request.pre.user.email);

    // Send forgot password e-mail
    let forgotPasswordConfig = {
      'from': env.email.user,
      'to': request.pre.user.email,
      'subject': `Battle-Comm: Reset Password`,
      'html': buildForgotPasswordEmail({
        token
      })
    };

    transporter.sendMail(forgotPasswordConfig, (error, info) => {
      if (error) {
        console.log(error);
        reply('Somthing went wrong');
      } else {
        console.log(token);
        reply(token).code(200);
      };
    });

  },
  verifyResetToken: (request, reply) => {
    let tokenResponse = verifyResetToken(request.params.token);
    console.log(tokenResponse);
    if (tokenResponse) {
      reply(tokenResponse).code(200);
    } else {
      reply(Boom.badRequest('Invalid token'));
    }
  },
  setNewPassword: (request, reply) => {
    models.User.find({
      'where': {
        'email': request.payload.email
      }
    }).then((user) => {
      let tokenResponse = verifyResetToken(request.params.token);
      if (tokenResponse) {
        // Send forgot password e-mail
        let passwordUpdatedConfig = {
          'from': env.email.user,
          'to': request.payload.email,
          'subject': `Battle-Comm: Password Updated`,
          'html': buildPasswordUpdatedEmail()
        };

        transporter.sendMail(passwordUpdatedConfig, (error, info) => {
          if (error) {
            console.log(error);
            reply('Somthing went wrong');
          } else {
            userFunctions.hashPassword(request.payload.password, (err, hash) => {
              user.updateAttributes({
                'password': hash
              }).then((user) => {
                reply(user).code(200);
              })
            });
          };
        });
      } else {
        reply(Boom.badRequest('Invalid token'));
      }

    });
  },
  updatePartial: (request, reply) => {
    models.User.find({
        'where': {
          'id': request.params.id
        }
      })
      .then((user) => {
        if (user) {
          let sendEmail = false;
          if (request.payload.rewardPoints && request.payload.rewardPoints !== user.rewardPoints) {
            sendEmail = true;
          }
          user.updateAttributes({
            // 'email': request.payload.email,
            // 'password': request.payload.password,
            'firstName': request.payload.firstName,
            'lastName': request.payload.lastName,
            'tourneyAdmin': request.payload.tourneyAdmin,
            'member': request.payload.member,
            'subscriber': request.payload.subscriber,
            'eventAdmin': request.payload.eventAdmin,
            'newsContributor': request.payload.NewsContributor,
            'venueAdmin': request.payload.venueAdmin,
            'clubAdmin': request.payload.clubAdmin,
            'systemAdmin': request.payload.systemAdmin,
            'username': request.payload.username,
            'club': request.payload.club,
            'mainPhone': request.payload.mainPhone,
            'mobilePhone': request.payload.mobilePhone,
            'streetAddress': request.payload.streetAddress,
            'aptSuite': request.payload.aptSuite,
            'city': request.payload.city,
            'state': request.payload.state,
            'zip': request.payload.zip,
            'dob': request.payload.dob,
            'bio': request.payload.bio,
            'facebook': request.payload.facebook,
            'twitter': request.payload.twitter,
            'instagram': request.payload.instagram,
            'googlePlus': request.payload.googlePlus,
            'youtube': request.payload.youtube,
            'twitch': request.payload.twitch,
            'website': request.payload.website,
            'rewardPoints': request.payload.rewardPoints,
            'visibility': request.payload.visibility,
            'shareContact': request.payload.shareContact,
            'shareName': request.payload.shareName,
            'shareStatus': request.payload.shareStatus,
            'newsletter': request.payload.newsletter,
            'marketing': request.payload.marketing,
            'sms': request.payload.sms,
            'allowPlay': request.payload.allowPlay,
            'icon': request.payload.icon,
            'totalWins': request.payload.totalWins,
            'totalLoss': request.payload.totalLoss,
            'totalDraw': request.payload.totalDraw,
            'totalPoints': request.payload.totalPoints,
            'eloRanking': request.payload.eloRanking,
            'accountActive': request.payload.accountActive
          }).then((response) => {
            if (sendEmail === true) {
              let customerMailConfig = {
                'from': env.email.user,
                'to': response.email,
                'subject': `Reward Point Update: New Total of ${response.rewardPoints}`,
                'html': buildRPUpdateEmail(response)
              };

              transporter.sendMail(customerMailConfig, (error, info) => {
                if (error) {
                  console.log(error);
                  reply('Somthing went wrong');
                } else {
                  reply(response).code(200);
                };
              });
            } else {
              reply(response).code(200);
            }
          });
        } else {
          reply().code(404);
        }
      }).catch((err) => {
        console.log(err);
      });
  },
  // delete: (request, reply) => {
  //     models.UserLogin.destroy({
  //             'where': {
  //                 'id': request.params.id
  //             }
  //         })
  //         .then((response) => {
  //             if (response) {
  //                 reply().code(200);
  //             }
  //             else {
  //                 reply().code(404);
  //             }
  //         });
  // },
  search: (request, reply) => {
    models.User.findAll({
        'where': {
          '$or': [{
              'firstName': {
                '$ilike': '%' + request.payload.query + '%'
              }
            },
            {
              'lastName': {
                '$ilike': '%' + request.payload.query + '%'
              }
            },
            {
              'username': {
                '$ilike': '%' + request.payload.query + '%'
              }
            },
          ]
        },
        'attributes': ['id', 'firstName', 'lastName', 'username', 'icon'],
        'limit': request.payload.maxResults || 20
      })
      .then((products) => {
        reply(products).code(200);
      });
  },
};


export default users;
