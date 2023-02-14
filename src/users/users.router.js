// dependences

const router = require('express').Router()


//file's imports
const userServices = require('./users.services')

router.get('/users', userServices.getAllUser)
router.post('/users', userServices.postNewUser)

router.get('/users/:id',userServices.getUserById)

module.exports = router