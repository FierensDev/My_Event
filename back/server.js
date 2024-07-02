// require('dotenv').config({path:'./config/.env'});

// const { default: mongoose } = require('mongoose');

// const express = require ('express');
// const app = express();

// //MONGO DB 
// const { MongoClient } =require('mongodb');
// const client = new MongoClient(process.env.MONGO_URL)

// async function main(){
//     await client.connect();
//     console.log('Connection mongodb OK!');
//     const db = client.db('googleUser');
//     const collection = db.collection('username');

//     //==========================================
//     //=              CRUD                      =
//     //==========================================

//     //CREATE
//     // try{
//     //     const insertData = await collection.insertMany([
//     //         {
//     //             name: "deuns",
//     //             age:21,
//     //             sexe:'masculin'
//     //         },
//     //         {
//     //             name: "test",
//     //             age:10,
//     //             sexe:'autre'
//     //         },
//     //         {
//     //             name: "azer",
//     //             age:30,
//     //             sexe:'autre'
//     //         },
//     //         {
//     //             name: "reza",
//     //             age:40,
//     //             sexe:'autre'
//     //         }
//     //     ]);

//     //     console.log('Document insérés =>', insertData);
//     // }catch(e){ throw e;}

//     //READ
//     // try {
//     //     //one data
//     //     // const findData = await collection.findOne({ name: 'deuns'});
//     //     // console.log('READ data: ',findData);

//     //     //multiple data
//     //     const findMultipleData = await collection.find({ age : 21});
//     //     console.log(await findMultipleData.toArray());
//     // } catch(e){throw e;}

//     //UPDATE
//     // try{
//     //     //one data
//     //     // const update = collection.updateOne({ name : 'test'}, { $set: { name:'autre', age: 21}});
//     //     // console.log(await update);

//     //     //multiple data
//     //     const updateMultiple = collection.updateMany({ age : 50}, { $set: { age: 20}});
//     //     console.log(await updateMultiple);
//     // }catch(e){throw e;}

//     //DELETE
//     // try{
//     //     //one
//     //     const deleteOne = await collection.deleteOne({ name: 'autre '});
//     //     console.log(await deleteOne);
//     //     //multiple
//     //     const deleteMultiple = await collection.deleteMany({ age: 30});
//     //     console.log(await deleteMultiple);
//     // }catch(e){throw e;}

    
//     return'done!';
// }

// main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(()=> client.close())
// //MONGO DB


// app.listen(process.env.PORT, () => {
//     console.log(`Listening on port ${process.env.PORT}`);
// })

// ==============================================
// ==============    MONGOOSE    ================
// ==============================================

// require('dotenv').config();
// require('dotenv').config({path:'./config/.env'});
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main(){
//     await mongoose.connect(process.env.MONGO_URL);


// const User = mongoose.model('User', {
//     name: String,
//     age: Number
// })

// const firstPerson = new User({
//     name: 'Alex',
//     age: 30
// });

// const secondPerson = new User({
//     name: 'justine',
//     age : 30
// })

// console.log(firstPerson, secondPerson);
// await firstPerson.save();
// await secondPerson.save();
// } 

// ===============================================

const express = require("express");
const userRoutes = require("./routes/user.routes");
const bodyParser = require("body-parser");

require('dotenv').config();
require('dotenv').config({path:'./config/.env'});

require("./config/db");
const app = express();

//Middleware
app.use(bodyParser.json());


//Routes 
//a chaque fois qu'on appelle cette url, tu m'appelle userRoutes
app.use('/api/user', userRoutes);


// Server, toujours a la fin
app.listen(process.env.PORT, () => {
    console.log(`====Listening on port ${process.env.PORT}`); 
})