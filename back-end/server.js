const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require ('./routes/routes')
const cors = require('cors')

dotenv.config()

PORT = 4000;


mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
 app.listen(4000, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
  })

// const DataStore = require('nedb')

// const PORT = 8000

// //BDD
// const db = new DataStore({ filename: 'form'})
// db.loadDatabase()


// //Start Express


// app.use(express.json())

// //API CRUD

// //CREATE
// app.post('/api/form', (req, res) => {
//     console.log(req.body)
//     db.insert(req.body)
//     res.send(req.body)
//   })

//   //READ ALL
// app.get('/api/form', (req, res) => {
//     db.find({}, (err,docs) => {
//         if (err) console.log(err)
//         res.send(docs)
//     })
//   })

//    //READ ONE
// app.get('/api/form/:id', (req, res) => {
//     db.find({_id: req.params.id}, (err,docs) => {
//         if (err) console.log(err)
//         res.send(docs)
//     })
//   })

//   //UPDATE
//   app.patch('/api/form/:id', (req,res) =>{
//       db.update({_id: req.params.id}, { $set:{ ...req.body }})
//       res.send (req.body)
//   })
  
//   //DELETE
//   app.delete('/api/form/:id', (req,res) =>{
//     db.remove({_id: req.params.id})
// })


