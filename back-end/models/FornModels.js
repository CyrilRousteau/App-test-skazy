const mongoose = require('mongoose')

const formBookTemplate = new mongoose.Schema({
  chekinDate:{
      type: String,
      required:true
  },
  chekoutDate:{
    type: String,
    required:true
  },
  adult:{
    type: Number,
    required:true
  },
  children:{
    type: Number,
    required:true
  },
  type:{
    type: String,
    required:true
  },
  firstName:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required:true
  },
  tel:{
    type: Number,
    required:true
  },
  message:{
    type: String,
    
  }
})

module.exports = mongoose.model('mytable', formBookTemplate)





