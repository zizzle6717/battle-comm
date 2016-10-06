'use strict';
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			unique: true
		},
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
		subscriber: {
			type: DataTypes.BOOLEAN,
			defaultValue: true
		},
        tourneyAdmin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
        eventAdmin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
        newsContributor: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
        venueAdmin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
        clubAdmin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
        systemAdmin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		username:  {
			type: DataTypes.STRING,
			unique: true
		},
        club: DataTypes.INTEGER,
        mainPhone: DataTypes.STRING,
        mobilePhone: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        aptSuite: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        dob: DataTypes.DATE,
        bio: DataTypes.TEXT,
        facebook: DataTypes.STRING,
        twitter: DataTypes.STRING,
        instagram: DataTypes.STRING,
        googlePlus: DataTypes.STRING,
        youtube: DataTypes.STRING,
        twitch: DataTypes.STRING,
        website: DataTypes.STRING,
        rewardPoints: DataTypes.INTEGER,
        visibility: DataTypes.STRING,
        shareContact: DataTypes.STRING,
        shareName: DataTypes.STRING,
        shareStatus: DataTypes.STRING,
        newsletter: DataTypes.STRING,
        marketing: DataTypes.STRING,
        sms: DataTypes.STRING,
        allowPlay: DataTypes.STRING,
		icon: {
			type: DataTypes.STRING,
			defaultValue: 'profile_image_default.png'
		},
        totalWins: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
        totalLosses: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
        totalDraws: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
        totalPoints: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
        eloRanking: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
        accountActive: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
				User.hasMany(models.ProductOrder);
				User.hasMany(models.UserFriend);
				User.hasMany(models.UserNotification);
                User.hasMany(models.UserMessage);
                User.hasMany(models.UserAchievement);
                User.hasMany(models.UserPhoto);
            }
        }
    });
    return User;
};
