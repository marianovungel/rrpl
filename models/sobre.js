const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');

const Sobre = mongoose.model('Sobre', { 
    titulo: String,
    subtitulo: String,
    paragrafro: String,
    imagem: Array
});

module.exports = Sobre;