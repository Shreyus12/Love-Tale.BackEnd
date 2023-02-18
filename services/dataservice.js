//all-Breeds

const { MongoClient } = require('mongodb');

async function handler(req, res) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const collection = client.db('lovetale').collection('my-collection');

    if (req.method === 'GET') {
      const data = await collection.find().toArray();
      res.status(200).json(data);
    } else if (req.method === 'POST') {
      const newData = req.body;
      await collection.insertOne(newData);
      res.status(201).json({ message: 'Data added successfully' });
    } else {
      res.status(404).json({ message: 'Invalid request method' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  } finally {
    await client.close();
  }
}

module.exports = handler;



const allBreeds = () => {
    return db.Breed.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    breeds: result
                }

            }
            else {
                return {
                    statusCode: 404,
                    message: "no data is present"
                }

            }
        }
    )

}


const viewBreed = (id) => {
    return db.Breed.findOne({
        id
    })
        .then(
            (result) => {
                if (result) {
                    return {
                        statusCode: 200,
                        breed: result
                    }

                }
                else {
                    return {
                        statusCode: 404,
                        message: "Product not found"
                    }
                }

            }
        )


}

const addBreed = (breed, id, origin, age, temperament, price, photo) => {
    return db.Breed.findOne({
        id
    })
        .then((result) => {
            console.log(result);
            if (result) {
                return {
                    statusCode: 403,
                    message: "Same id exist"
                }

            }
            else {

                const newBreed = new db.Breed(
                    {
                        breed: breed,
                        id: id,
                        origin: origin,
                        age: age,
                        temperament: temperament,
                        price: price,
                        photo: photo
                    })

                newBreed.save()
                return {
                    statusCode: 200,
                    message: 'new breed added to the list'

                }
            }

        }
        )


}


const addSeller = (name, id, contact, location,count) => {
    return db.Seller.findOne({
        id
    })
        .then((result) => {
            console.log(result);
            if (result) {
                return {
                    statusCode: 403,
                    message: "Same id exist"
                }

            }
            else {

                const newSeller = new db.Seller(
                    {
                        name: name,
                        id: id,
                        contact: contact,
                        location: location,
                        count : count
                    })

                    newSeller.save()
                return {
                    statusCode: 200,
                    message: 'new breed and seller details added'

                }
            }

        }
        )


}

const adduser = (name, phone, email) => {
    return db.User.findOne({
        email
    }).then((result) => {
            console.log(result);
            if (result) {
                return {
                    statusCode: 403,
                    message: "Same  exist"
                }

            }
            else {

                const newuser = new db.User(
                    {
                        name: name,
                        phone: phone,
                        email: email
                    })

                    newuser.save()
                return {
                    statusCode: 200,
                    message: 'Enquiry successfull'

                }
            }

        }
        )


}



const allSellers = () => {
    return db.Seller.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    sellers: result
                }

            }
            else {
                return {
                    statusCode: 404,
                    message: "no data is present"
                }

            }
        }
    )

}

const alluser = () => {
    return db.User.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    user: result
                }

            }
            else {
                return {
                    statusCode: 404,
                    message: "no data is present"
                }

            }
        }
    )

}

const viewSeller = (id) => {
    return db.Seller.findOne({
        id
    })
        .then(
            (result) => {
                if (result) {
                    return {
                        statusCode: 200,
                        seller: result
                    }

                }
                else {
                    return {
                        statusCode: 404,
                        message: "Seller not found"
                    }
                }

            }
        )


}






const login = (email, pswd) => {
    return db.Log.findOne({
        email,
        password: pswd
    }).then((result) => {
        if (result) {
            return {
                statusCode: 200,
                message: 'Login Successfull',
                currentEmail: email,
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'Invalid Account/ Password'

            }
        }
    })

}

const register = (email, pswd) => {
    return db.Log.findOne({
        email
    }).then((result) => {
        console.log(result);
        if (result) {
            return {
                statusCode: 403,
                message: 'Account Already Exist!! '
            }

        }
        else {
            const newLog = new db.Log({

                email: email,
                password: pswd

            })
            newLog.save()
            return {
                statusCode: 200,
                message: 'Registeration sucessfull'
            }

        }

    })

}



const addtosellerlist = (breed) => {
    return db.Sellerlist.findOne({
        id:breed.id
    })
    .then(
        (result) => {
            if (result) {
                return {
                    statusCode: 401,
                    message: "Already added to delete"
                }

            }
            else {

                let newBreed = new db.Sellerlist(
                    {
                        breed: breed.breed,
                        id: breed.id,
                        breedType: breed.breedType,
                        origin: breed.origin,
                        age: breed.age,
                        popularity: breed.popularity,
                        temperament: [breed.temperament],
                        hypoallergenic: breed.hypoallergenic,
                        intelligence: breed.intelligence,
                        price: breed.price,
                        photo: breed.photo
                      })
                      newBreed.save()
                return{
                    statusCode: 200,
                    message: 'item added to the wishlist'

                }
            }

        }
    )


}


const getsellerlist = () => {
    return db.Sellerlist.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    sellerlist: result
                }

            }
            else {
                return {
                    statusCode: 404,
                    message: "No data found"
                }
            }

        }
    )


}









const deleteItemAllbreed = (id)=>
{
    return db.Breed.deleteOne({
        id
    }).then((result)=>
    {
        if(result){

            return db.Breed.find().then(
                (result) => {
                    if (result) {
                        return {
                            statusCode: 200,
                            breed: result
                        }
        
                    }
                    else {
                        return {
                            statusCode: 404,
                            message: "No data found"
                        }
                    }
        
                }
            )


        }
        else{
            return{
                statusCode:404,
                message:"item not found"
            }
        }
    })


}

const deleteItemAllseller = (id)=>
{
    return db.Seller.deleteOne({
        id
    }).then((result)=>
    {
        if(result){

            return db.Seller.find().then(
                (result) => {
                    if (result) {
                        return {
                            statusCode: 200,
                            seller: result
                        }
        
                    }
                    else {
                        return {
                            statusCode: 404,
                            message: "No data found"
                        }
                    }
        
                }
            )


        }
        else{
            return{
                statusCode:404,
                message:"item not found"
            }
        }
    })


}




module.exports =
{
    allBreeds,
    viewBreed,
    addBreed,
    allSellers,
    viewSeller,
  addSeller,
    adduser,
    alluser,
    login,
    register,
    addtosellerlist,
    getsellerlist,
    deleteItemAllbreed,
    deleteItemAllseller
    
    

    



}