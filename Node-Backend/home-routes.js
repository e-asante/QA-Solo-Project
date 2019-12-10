const express =require('express')
const models = require('../models');
const router = express.Router();


router.get('/all', (req, res) => {
    const result = await models.Item.findAll({
        include: [
            {
                model: models.Location
            }
        ]
    });
    res.send(result);

});
router.get('/:index', (req, res) => {
    console.log("Trespassing.....");
    console.log("we have incoming!",req.url);
    ;
    if (req.params.index>=0 && req.params.index<=data.length-1)
    {
        res.send(data[req.params.index]);
    }
    else
    {
        res.status(404).send("not found");
    }
    
});
router.post('/:home', (req, res) => {
    console.log("Trespassing.....");
    console.log("we have incoming!",req.url);
    data.push(req.params.home);
    //res.status(404);
    res.send(data);
});
router.put('/:index/:newinfo', (req, res) => {
    console.log("updating");
    console.log("we have incoming!",req.url);

    if (req.params.index>=0 && req.params.index<=data.length-1)
    {
        data[req.params.index] = req.params.newinfo;
        res.send("updated");
    }
    else
    {
        res.status(404).send("not found");
    }
    

    res.status(404);
    //res.send("You Are Trespassing");
});
router.delete('/:index', (req, res) => {
    console.log("deleting");
    console.log("we have incoming!",req.url);
    if (req.params.index>=0 && req.params.index<=data.length-1)
    {
        data.splice(+req.params.index,1);
        res.send("purged");
    }
    else
    {
        res.status(404).send("not found");
    }
    
    
    
});




module.exports = router