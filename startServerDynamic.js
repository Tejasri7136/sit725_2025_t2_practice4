var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;


const cardList = [{
    title: 'Purple teddy',
    path: 'images/Purple.jpg',
    link: 'About purple teddy',
    description: 'Description of Purple teddy'
},
{
    title: 'White teddy',
    path: 'images/White.jpeg',
    link: 'About White teddy',
    description: 'Description of White teddy'
},
{
    title: 'Pink teddy',
    path: 'images/Pink.jpeg',
    link: 'About Pink teddy',
    description: 'Description of Pink teddy'
}];


app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});