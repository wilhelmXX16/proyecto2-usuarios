// imports file
const userControllers = require('./users.controllers')

const getAllUser = (req, res) => {
    const data = userControllers.findAllUser()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id

    const data = userControllers.findUserById(id)

    if(id){
        res.status(200).json(data)
    } else {
        res.status(404).json({message: 'Invalid Id'})
    }
}

const postNewUser = (req ,res) => {
    const {firstName,lastName, email, password, age} = req.body

    if(firstName && lastName && password){
        const data = userControllers.findNewUser({firstName,lastName, email, password, age})
        res.status(201).json(data)
    } else{
        res.status(400).json({
            message: 'Invalid Data',
            fields: {
                firstName: 'string*',
                lastName: 'string',
                email: 'string*',
                password: 'string*',
                age: 'integer'
            }
        })
    }
}

module.exports = {
    getAllUser,
    getUserById,
    postNewUser
}