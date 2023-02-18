const express = require('express')

const cors = require('cors')

const dataService = require('./services/dataservice')



const server = express();

server.use(cors({
    origin: 'http://localhost:4200'
}))

server.use(express.json())





server.listen(3000, () => {
    console.log('Server is listening at 3000');
})

const request = require('request');





server.get('/all-Breeds', (req, res) => {
    dataService.allBreeds()
        .then((result) => {
            res.status(result.statusCode).json(result)
        })

})

server.get('/view-breeds/:breedId', (req, res) => {

    dataService.viewBreed(req.params.breedId)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })


})


server.post('/add-Breeds', (req, res) => {


    dataService.addBreed(req.body.breed, req.body.id, req.body.origin, req.body.age, req.body.temperament, req.body.price, req.body.photo)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })


})


server.post('/add-Seller', (req, res) => {
    dataService.addSeller(req.body.name, req.body.id, req.body.contact,req.body.location,req.body.count)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })


})


server.get('/all-Sellers', (req, res) => {
    dataService.allSellers()
        .then((result) => {
            res.status(result.statusCode).json(result)
        })

})

server.get('/view-sellers/:sellerId', (req, res) => {

    dataService.viewSeller(req.params.sellerId)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })


})


server.get('/news', (req, res) => {
    const options = {
        url: 'https://newsapi.org/v2/everything',
        headers: {
            'User-Agent': 'My-Pet-App'
        },
        qs: {
            q: 'pets',
            apiKey: '72990d2065d245bdaf451ccd122cafde',
        }
    };

    request(options, (error, apiResponse, body) => {
        if (error) res.send(error);
        else res.json(JSON.parse(body));
    });
});



server.post('/add-user', (req, res) => {
    dataService.adduser(req.body.name, req.body.phone, req.body.email)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })


})

server.get('/all-user', (req, res) => {
    dataService.alluser()
        .then((result) => {
            res.status(result.statusCode).json(result)
        })

})


server.post('/login',(req,res)=>{
    
    dataService.login(req.body.email,req.body.pswd)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })


})

server.post('/register',(req,res)=>{
    
    dataService.register(req.body.email,req.body.pswd)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })


})

server.post('/add-to-sellerlist',(req,res)=>
{
    dataService.addtosellerlist(req.body)
    .then((result)=>
    {
        res.status(result.statusCode).json(result)
    })


})


server.get('/get-sellerlist',(req,res)=>
{

    dataService.getsellerlist()
    .then((result)=>
    {
        res.status(result.statusCode).json(result)
    })


})

server.delete('/remove-item-all-Breeds/:breedId', (req, res) => {

    dataService.deleteItemAllbreed(req.params.breedId)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })


})

server.delete('/remove-item-all-Sellers/:sellerId', (req, res) => {

    dataService.deleteItemAllseller(req.params.sellerId)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })


})













