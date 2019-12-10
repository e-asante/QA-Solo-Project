const express =require('express')
const router = express.Router();
const data =[];

// router.get('/all',(req ,res) => {
// res.Send(data);
// });

router.get('/get/:lgin', (req, res) => {
    console.log("we have incoming!",req.url);
    //console.log("Trespassing....Lost");
    res.send(data[req.params.lgin]);
});

// router.get('/', (req, res) => {
//     console.log("Trespassing....Lost");
//     res.send("Are You Lost?");
// });




router.get('/', (req, res) => {
    console.log("Trespassing.....");
    console.log("we have incoming!",req.url);
    
    res.send("You are home");
});
router.get('/all', (req, res) => {
    console.log("Trespassing.....");
    console.log("we have incoming!",req.url);
    
    res.send(data);
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