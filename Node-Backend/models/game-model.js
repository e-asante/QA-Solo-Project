module.exports = (sequelize, DataTypes, attributes) => {
    return sequelize.define('game', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            validate: {
                max: 50,
            }
            
            },
        name: {
            type: DataTypes.STRING,
            validate: {len: [2,40]},
        },
        releaseDate: {
            type: DataTypes.DATE,
            validate: {isDate: true}, 
        },
        rating: {
            type: DataTypes.INTEGER,
            validate: {
                max: 10,                  
                min: 1, 
                      }
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
              gametype: {
                type: DataTypes.STRING
                   }
    });
}


