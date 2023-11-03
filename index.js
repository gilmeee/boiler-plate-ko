const express = require('express')
const app = express()
const port = 5001

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://annielalacle:r14985@cluster0.apdoxpp.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindandModify:false
}).then(()=>console.log('MongoDB connected...'))
 .catch(err => console.log(err))
app.get('/', (req, res)=> res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))