module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            validate: {
                max: 50,
            }
            },
        username: {
        type: DataTypes.STRING,
        validate: {len: [5,20]},
        },
        password: {
            type: DataTypes.STRING,
            validate: {len: [2,40]},
            },
        favourite_Game: {
                type: DataTypes.STRING,
                validate: {len: [2,40]},
                },
        genre1: {
                    type: DataTypes.STRING
                    },
        genre2: {
            type: DataTypes.STRING
        },
        platform: {
            type: DataTypes.STRING
            },
    });
}