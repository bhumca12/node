const mongoose = require('mongoose');

const urlSchema=new mongoose.Schema({
   movieName:{
    type:String,
    required:true,
    unique:true
   },
   movieTitle:{
    type:String,
    required:true,
   
   },
   movieGenre:{
    type:String,
    required:true,
   
   },
   movieRating:{
    type:String,
    required:true,
   
   },
   movieStreaming:{
    type:String,
    required:true,
   },
   
  
})

const Movie=mongoose.model('movie',urlSchema)

module.exports=Movie;