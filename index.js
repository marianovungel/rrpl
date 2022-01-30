const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const RoterGladiador = require('./routes/gladiador.routes')
const RouterSobre = require('./routes/sobre.routes')
const RouterPost = require('./routes/post.routes')
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.URL_MONGDB, {
     useNewUrlParser: true,
     useUnifiedTopology: true
})

app.use(bodyParser.json())
app.use(morgan())
app.use("/gladiador", RoterGladiador)
app.use("/sobre", RouterSobre)
app.use("/post", RouterPost)
app.get("/", (req, res)=>{res.send(`<h1>Start Project</h1>`)})

const PORT = process.env.PORT;
app.listen(PORT, console.log("start project"))