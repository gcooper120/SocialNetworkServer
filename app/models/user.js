module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('user', {
 
        user_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        email: {
            type: Sequelize.TEXT,
            validate: {
                isEmail: true
            },
            notEmpty: true
        },
 
        password: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        city: {
            type: Sequelize.STRING,
            allowNull: true
        },
        state: {
            type: Sequelize.STRING,
            allowNull: true
        },
        country: {
            type: Sequelize.STRING,
            allowNull: true
        },
 
        dateofBirth: {
            type: Sequelize.DATEONLY,
            allowNull: true
        },

        about: {
            type: Sequelize.STRING,
            allowNull: true
        },
        
        profilePic: {
            type: Sequelize.INTEGER,
            allowNull: true
        }, 
        status: {
            type: Sequelize.ENUM('verified', 'unverified'),
            defaultValue: 'unverified'
        }
 
 
    }, {
        classMethods: {
            associate: function(models) {
                User.hasOne(models.Profile, {
                    foreignKey: 'user_id',
                    onDelete: 'CASCADE'
                });
            },
            associate: function(models) {
                User.hasOne(models.Photo, {
                    foreignKey: 'profilePic',
                    onDelete: 'CASCADE'
                });
            }
        }
    });
 
    return User;
 
}