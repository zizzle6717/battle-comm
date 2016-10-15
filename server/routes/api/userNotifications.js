'use strict';

let userNotifications = require('../handlers/userNotifications');
let Joi = require('joi');
let models = require('../../models');

module.exports = [
	// User Notifications
	{
		method: 'POST',
		path: '/api/userNotifications',
		config: {
			tags: ['api'],
			description: 'Add a new userNotification',
			notes: 'Add a new userNotification',
			auth: {
				strategy: 'jsonWebToken',
				scope: ['subscriber', 'tourneyAdmin', 'eventAdmin', 'venueAdmin', 'clubAdmin', 'systemAdmin']
			},
			validate: {
				payload: {
					UserId: Joi.number().required(),
					type: Joi.string().required(),
					status: Joi.string(),
					fromId: Joi.number().required(),
					fromUsername: Joi.string().required(),
					fromName: Joi.string().required()
				}
			}
		},
		handler: userNotifications.create
	},
	{
		method: 'PUT',
		path: '/api/userNotifications/{id}',
		config: {
			tags: ['api'],
			description: 'Update a user notification by id',
			notes: 'Update a user notification by id',
			auth: {
				strategy: 'jsonWebToken',
				scope: ['subscriber', 'tourneyAdmin', 'eventAdmin', 'venueAdmin', 'clubAdmin', 'systemAdmin']
			},
			validate: {
				params: {
					id: Joi.number().required()
				},
				payload: {
					UserId: Joi.number().required(),
					type: Joi.string().required(),
					status: Joi.string().required(),
					fromId: Joi.number().required(),
					fromName: Joi.string().required()
				}
			}
		},
		handler: userNotifications.update
	},
	{
		method: 'DELETE',
		path: '/api/userNotifications/{id}',
		config: {
			tags: ['api'],
			description: 'Delete a user notification by id',
			notes: 'Delete a user notification by id',
			auth: {
				strategy: 'jsonWebToken',
				scope: ['subscriber', 'tourneyAdmin', 'eventAdmin', 'venueAdmin', 'clubAdmin', 'systemAdmin']
			},
			validate: {
				params: {
					id: Joi.number().required()
				}
			}
		},
		handler: userNotifications.delete
	}
];