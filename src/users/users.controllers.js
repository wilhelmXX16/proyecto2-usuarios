const userDB = []

let id = 1

//get all
const findAllUser = () => {
    return userDB
}
// get by id
const findUserById = (id) => {
    const data = userDB.find(item => item.id == id)
    return data
}

// create new user
const findNewUser = (obj) =>{
    const newUser = {
        id: id++,
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        password: obj.password,
        age: obj.age
    }
    userDB.push(newUser)
    return newUser
}

module.exports = {
    findAllUser,
    findUserById,
    findNewUser
}