const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/lovetale',()=>
{
    console.log('mongodb connection successful');
})

const Breed = mongoose.model('Breed',
{
    breed: String,
    id:Number,
    breedType: String,
    origin: String,
    age:String,
    popularity: Number,
    temperament: [String],
    hypoallergenic: String,
    intelligence: Number,
    price: Number,
    photo: String
  })


  const Seller = mongoose.model('Seller',
  {
    name: String,
    id:Number,
    contact: String,
    email: String,
    location: String
  })













  module.exports =
  {
    Breed,
    Seller
    
    
    

  }