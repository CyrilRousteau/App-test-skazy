const express = require('express')
const DataStore = require('nedb')

const PORT = 8000

//BDD
const db = new DataStore({ filename: 'form'})
db.loadDatabase()


//Start Express
const app = express()

app.use(express.json())

//API CRUD

//CREATE
app.post('/api/form', (req, res) => {
    console.log(req.body)
    db.insert(req.body)
    res.send(req.body)
  })

  //READ ALL
app.get('/api/form', (req, res) => {
    db.find({}, (err,docs) => {
        if (err) console.log(err)
        res.send(docs)
    })
  })

   //READ ONE
app.get('/api/form/:id', (req, res) => {
    db.find({_id: req.params.id}, (err,docs) => {
        if (err) console.log(err)
        res.send(docs)
    })
  })

  //UPDATE
  app.patch('/api/form/:id', (req,res) =>{
      db.update({_id: req.params.id}, { $set:{ ...req.body }})
      res.send (req.body)
  })
  
  //DELETE
  app.delete('/api/form/:id', (req,res) =>{
    db.remove({_id: req.params.id})
})

app.listen(8000, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)
  })
