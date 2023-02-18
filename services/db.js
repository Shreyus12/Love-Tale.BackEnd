const { MongoClient } = require('mongodb');


const uri = 'mongodb+srv://shreyus:vattathara31@love-tale.bxd5yd9.mongodb.net/lovetale?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('MongoDB connection error:', err);
  } else {
    console.log('MongoDB connection successful');
  }
});

module.exports = client;







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