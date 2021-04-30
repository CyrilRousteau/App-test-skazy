const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const formBookTemplateCopy = require ('../models/FornModels')

router.post('/form', (request, response) => {

  const bookFormFilled = new formBookTemplateCopy({

    chekinDate:request.body.chekinDate,
    chekoutDate:request.body.chekoutDate,
    adult:request.body.adult,
    children:request.body.children,
    type:request.body.type,
    firstName:request.body.firstName,
    email:request.body.email,
    tel:request.body.tel,
    message:request.body.message,

  })
  bookFormFilled.save()
  .then(data =>{
    response.json(data)
  })
  .catch(error => {
    response.json(error)
  })
})


module.exports = router
