const Sequelize = require('sequelize');

// Create sequalizer instance
var sequelize = new Sequelize(
    'gameRec',    //DB
    'root',     //username
    'password', //password
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);

// Import Models
const Games = sequelize.import(__dirname + '/game-model');
const Recommendations = sequelize.import(__dirname + '/recommendations-model');
const Users = sequelize.import(__dirname + '/user-model');

// Associations

//1:1
// Item.belongsTo(Location);
// Location.hasOne(Item);

//1:many
// Item.belongsTo(Location);
// Location.hasMany(Item);

//many:many
// Games.belongsTo(Recommendations);
// Recommendations.hasOne(Games);
// Recommendations.hasOne(Users);

Games.belongsToMany(Users, { through: Recommendations });
Users.belongsToMany(Games, { through: Recommendations });
Recommendations.belongsTo(Users);
Recommendations.belongsTo(Games);






// Sync models and add default data
sequelize.sync({ force: true }).then(() => {
    Games.create({ name: 'Fortnite', platform: 'PS4', date: '03/09/2015', genre1: 'Action', gametype:'Multiplayer', rating: '6'});
    Games.create({ name: 'Call of Duty', platform: 'XBOX ONE', date: '25/11/2011', genre1: 'Action',gametype:'Multiplayer',rating: '7'});
    Games.create({ name: 'CS:GO', platform: 'PC', date: '13/09/2005', genre1: 'Action', gametype:'Multiplayer',rating: '8'});
    Games.create({ name: 'Smash', platform: 'SWITCH', date: '13/09/2005', genre1: 'Action', gametype:'Multiplayer',rating: '8'});

    Games.create({ name: 'Destiny 2', platform: 'PS4', date: '03/09/2015', genre1: 'Action', genre2: 'RPG', gametype:'Co-op',rating: '8'});
    Games.create({ name: 'Destiny 2', platform: 'XBOX ONE', date: '25/11/2011', genre1: 'Action', genre2: 'RPG',gametype:'Co-op',rating: '8'});
    Games.create({ name: 'Destiny 2', platform: 'PC', date: '13/09/2005', genre1: 'Action', genre2: 'RPG', gametype:'Co-op',rating: '8'});
    Games.create({ name: 'Mario', platform: 'SWITCH', date: '13/09/2005', genre1: 'Adventure', gametype:'Co-op',rating: '8'});

    Games.create({ name: 'Witcher 3', platform: 'PS4', date: '03/09/2015', genre1: 'Adventure', genre2: 'RPG', gametype:'Singleplayer',rating: '9'});
    Games.create({ name: 'Witcher 3', platform: 'XBOX ONE', date: '25/11/2011', genre1: 'Adventure', genre2: 'RPG',gametype:'Singleplayer',rating: '9'});
    Games.create({ name: 'Witcher 3', platform: 'PC', date: '13/09/2005', genre1: 'Adventure', genre2: 'RPG', gametype:'Singleplayer',rating: '9'});
    Games.create({ name: 'Zelda', platform: 'SWITCH', date: '13/09/2005', genre1: 'Action', genre2: 'Adventure', gametype:'Singleplayer',rating: '9'});

    Games.create({ name: 'Fifa 20', platform: 'PS4', date: '13/09/2020', genre1: 'Sport', genre2: 'Simulation', gametype:'Multiplayer',rating: '7'});
    Games.create({ name: 'Fifa 20', platform: 'XBOX ONE', date: '13/09/2020', genre1: 'Sport', genre2: 'Simulation', gametype:'Multiplayer',rating: '7'});
    Games.create({ name: 'Fifa 20', platform: 'PC', date: '13/09/2020', genre1: 'Sport', genre2: 'Simulation', gametype:'Multiplayer',rating: '7'});
    Games.create({ name: 'Fifa 20', platform: 'SWITCH', date: '13/09/2020', genre1: 'Sport', genre2: 'Simulation', gametype:'Multiplayer',rating: '7'});

    Games.create({ name: 'The Witness', platform: 'PS4', date: '13/09/2017', genre1: 'Puzzle', gametype:'Siingleplayer',rating: '8'});
    Games.create({ name: 'The Witness', platform: 'XBOX ONE', date: '13/09/2017', genre1: 'Puzzle', gametype:'Siingleplayer',rating: '8'});
    Games.create({ name: 'The Witness', platform: 'PC', date: '13/09/2017', genre1: 'Puzzle', gametype:'Siingleplayer',rating: '8'});
    Games.create({ name: 'The Witness', platform: 'SWITCH', date: '13/09/2017', genre1: 'Puzzle', gametype:'Siingleplayer',rating: '8'});

    Games.create({ name: 'CIV 5', platform: 'PS4', date: '13/09/2010', genre1: 'Strategy', gametype:'Siingleplayer',rating: '6'});
    Games.create({ name: 'CIV 5', platform: 'PC', date: '13/09/2010', genre1: 'Strategy', gametype:'Siingleplayer',rating: '6'});
    Games.create({ name: 'CIV 5', platform: 'XBOX ONE', date: '13/09/2010', genre1: 'Strategy', gametype:'Siingleplayer',rating: '6'});
    Games.create({ name: 'CIV 5', platform: 'SWITCH', date: '13/09/2010', genre1: 'Strategy', gametype:'Siingleplayer',rating: '6'});

    Users.create({ username: 'xxX>mim<Xxx', password: "snipergang", platform: "PS4" });
    Users.create({ username: 'sikSnipez', password: "bang", platform: "PC" });
    Users.create({ username: 'consolegamer', password: "controller", platform: "PS4" });

    Recommendations.create({ gameId: 1, UserId: 1});
    Recommendations.create({ gameId: 3, UserId: 1});
    Recommendations.create({ gameId: 2, UserId: 2});
    Recommendations.create({ gameId: 1, UserId: 3});
    
});

// Export models
module.exports = {
    Games,
    Recommendations,
    Users
};
