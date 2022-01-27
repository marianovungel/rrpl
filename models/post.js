const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');

const Post = mongoose.model('Post', { 
    titulo: String,
    desc: String,
    paragrafro: String,
    imagem: Array
});

module.exports = Post;