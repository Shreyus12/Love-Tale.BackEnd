const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log('mongodb connection successful');
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