const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const RoterGladiador = require('./routes/gladiador.routes')
const RouterSobre = require('./routes/sobre.routes')
const RouterPost = require('./routes/post.routes')
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://projetocasaviva:TOmHxJblWZSadPCL@cluster0.6cwlr.mongodb.net/rrplm?retryWrites=true&w=majority", {
     useNewUrlParser: true,
     useUnifiedTopology: true
})

app.use(bodyParser.json())
app.use(morgan())
app.use("/gladiador", RoterGladiador)
app.use("/sobre", RouterSobre)
app.use("/post", RouterPost)
app.get("/", (req, res)=>{res.send(`<h1>Start Project</h1>`)})

app.listen("8000", console.log("start project"))