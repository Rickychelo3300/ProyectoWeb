'use strict'
var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var chocolateSchema=Schema({
    nombre: String,
    precio: Number,
    tipo: String,
    id: String,
    imagen: String
})
module.exports=mongoose.model('Chocolate',chocolateSchema);