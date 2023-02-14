const express = require('express')

//router import
const userRouter = require('./users/users.router')

// config port
const port = 9000
const app = express()

//json request available
app.use(express.json())

app.get('/' ,( req,res) => {
    res.status(200).json({message: 'ok'})
})

// Api route 
app.use('/', userRouter)

//star server
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})

module.exports = app
