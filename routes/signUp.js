const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    //res.render(signUp)
    res.render('signUp')
})



module.exports = router