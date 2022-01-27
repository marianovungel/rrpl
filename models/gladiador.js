const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');

const Gladiador = mongoose.model('Gladiador', { 
    nome: String,
    apelido: String,
    foto: String,
    vitoria: Number,
    derrota: Number,
    empate: Number,
    titulo: Number,
    batalha: Number
});

module.exports = Gladiador;