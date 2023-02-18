const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://shreyus:vattathara31@love-tale.bxd5yd9.mongodb.net/lovetale',()=>{
  console.log('Mongo Db successfull');
})





const Breed = mongoose.model('Breed',
  {
    breed: String,
    id: Number,
    breedType: String,
    origin: String,
    age: String,
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
    id: Number,
    contact: String,
    location: String,
    count: Number
  })

  const User = mongoose.model('User',
  {
    name: String,
    phone: Number,
    email: String
  })

  const Log = mongoose.model('Log',
    {
        email: String,
        password: String
    })

    const Sellerlist = mongoose.model('Sellerlist',
    {
      breed: String,
      id: Number,
      breedType: String,
      origin: String,
      age: String,
      popularity: Number,
      temperament: [String],
      hypoallergenic: String,
      intelligence: Number,
      price: Number,
      photo: String
      })


    






module.exports =
{
  Breed,
  Seller,
  User,
  Log,
  Sellerlist








}