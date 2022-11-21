const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    const data = userControllers.showAllUsers()
    res.status(200).json(data)
}

const getUser = (req, res) => {
    const {id} = req.params
    const data = userControllers.showUser(id)
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({message: 'Invalid ID'})
    }
}

const postUser = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body
    if(email && password) {
        const data = userControllers.addUser({first_name, last_name, email, password, birthday})
        res.status(200).json(data)
    } else {
        res.status(400).json({message: 'Invalid Data', fields: {title: 'String', description: 'String'}})
    }
}

const deleteUser = (req, res) => {
    const {id} = req.params
    const data = userControllers.removeUser(id)
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({message: 'Invalid data'})
    }
}

const updateUser = (req, res) => {
    const {id} = req.params
    const {first_name, last_name, email, password, birthday} = req.body

    const data = userControllers.updateUser(id, {first_name, last_name, email, password, birthday})

    if(data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({message: 'Invalid Data'})
    }
}

module.exports = {
    getAllUsers,
    getUser,
    postUser,
    deleteUser,
    updateUser
}