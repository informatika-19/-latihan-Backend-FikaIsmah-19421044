const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/latihan',{
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true
}).then(() =>{

console.log('berhasil conek ke database')
}).catch((e) =>{
console.log(e)
console.log('gagal konek ke database')

})
app.use(bodyParser.json({
    extended:true,
    limit:'20mb'
} ))

app.use(bodyParser({
    extended:true,
    limit:'20mb'
}))

app.get('/',(req, res) =>{
    res.send('<h1>Hello World</h1>')
})

  //req.params
app.get('/profile/:username/:id', (req,res) => {
    console.log(req.params)
    res.send('Username Anda' + req.params.username)
})

app.get('/daerah/:namadaerah/:id', (req, res) =>{
    const namadaerah = req.params.namadaerah
    const idDaerah = req.params.idDaerah
    res.send('Daerah Anda' + req.params.namadaerah)
})
   //req.body
   //app.post('/register', (req, res) => {
    //res.json(req.body)
    //console.log(req.body)
    //})
    //const userRoutes = require('./ router/user')
    app.use('/user/', require('./routes/user'))


app.listen(3000,() => {
    console.log('Server Mulai')
})