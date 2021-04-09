const router = require('express').Router()
const usercontroler = require('../controller/user')

router.post('/register', (req, res) => {
    usercontroler.register(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    })
})

module.exports = router