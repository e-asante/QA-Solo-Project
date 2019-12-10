const express = require("express");
const itemRouter = require("./routes/item-routes");
const cors =require('cors');
var app = express();


app.use(cors());
app.use(express.json());

app.get('/break stuff', (req, res, next) => {
    next('oh no')
});

 app.use('/item',itemRouter);
app.use((err, req, res, next) => {
    res.status(500).send({
        error: "something wrong",
        message: err
        
    })
});


app.listen(8080, () => {
    console.log('Server running on port 8080.')
});

module.exports = app;
