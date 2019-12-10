const express = require('express');
const models = require('../models');
const router = express.Router();
const Op = require('sequelize').Op;



router.get('/', (req, res) => {
    res.send("welcome weve been waiting");
});

router.get('/all', async (_req, res) => {
    const result = (await models.Users.findAll({
        include: [
            {
                model: models.Games
            }
        ]
    })).map(user => ({
        username: user.username,
        games: user.games.map(g => g.recommendations)
    }));

    res.send(result);
});
router.post('/recommendations', async (req, res) => {

    const genres = [
        req.body.genre1,
        req.body.genre2,
        req.body.genre3,
    ];
    
    const where = {
        [Op.or]: [
            { genre1: { [Op.in]: genres } },
            { genre2: { [Op.in]: genres } },
        ]
    };
    if(req.body.platform) {
        where.platform = req.body.platform;
    }

    let result = await models.Games.findOne({where, order: [['rating', 'DESC']]});

    models.Recommendations.create({ gameId: result.id, UserId: req.body.UserId});
    
    res.send(result);
    
    // let result = await models.Recommendations.findAll({
    //     attributes: [],
    //     where: { UserId: _req.body.UserId },
    //     include: [{ model: models.Games }]
    // });
    // result = result.map(res => res.game);
    // res.send(result);
});
router.get('/games', async (_req, res) => {
    const result = await models.Games.findAll({

    });
    res.send(result);
});
router.get('/users', async (_req, res) => {
    const result = await models.Users.findAll({

    });
    res.send(result);
});
router.get('/users/:id', async (_req, res) => {
    const result = await models.Users.findOne({
        where: { id: _req.params.id }
    });
    if(result != null)
    {
        res.status(200).send(result);
    }
    else
    {
        res.status(404).send();
    }
});
router.post('/login', async (_req, res) => {
    const result = await models.Users.findOne(
        { where: { username: _req.body.username, password: _req.body.password } }
    );
    if(result != null)
    {
        res.status(200).send(result);
    }
    else
    {
        res.status(404).send();
    }
    
});
router.post('/new', async (req, res) => {

    console.log("adding");
    console.log("we have incoming!", req.url);

    await models.Users.create(req.body);

    res.send("added");
});
router.put('/:index', async (req, res) => {
    console.log("updating");
    console.log("we have incoming!", req.url);

    const result = await models.Users.findOne({
        where: { id: req.params.index }
    });
    if(result != null)
    {
        await models.Users.update(req.body, { where: { id: req.params.index } });


        res.status(200).send("updated");
    }
    else
    {
        res.status(404).send("Not Found");
    }

   
   

   
});
router.delete('/:index', async (req, res) => {
    console.log("deleting");
    console.log("we have incoming!", req.url);

    const result = await models.Users.findOne({
        where: { id: req.body.id }
    });
    if(result != null)
    {
        await models.Users.destroy( { where: { id: req.body.id } });

    res.send("Deleted");
    }
    else
    {
        res.status(404).send("Not Found");
    }

    



});




module.exports = router