//all-Breeds

const db = require('./db')

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


const addSeller = (name, id, contact, email, location) => {
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
                        email: email,
                        location: location,
                    })

                    newSeller.save()
                return {
                    statusCode: 200,
                    message: 'new seller details added'

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
    deleteItemAllbreed,
    addSeller,
    deleteItemAllseller



}