const {v4} = require('uuid')

let usersDB = []

const showAllUsers = () => {
    return usersDB
}

const showUser = (id) => {
    const singleUser = usersDB.find(user => user.id === id)
    return singleUser
}

const addUser = (userData) => {
    const user = {
        id: v4(),
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password: userData.password,
        birthday: userData.birthday
    }
    usersDB.push(user)
    return user
}

const removeUser = (id) => {
    usersDB = usersDB.filter(user => user.id !== id)
    return usersDB
}

const updateUser = (id, newUserData) => {
    let userToBeUpdated = usersDB.find(user => user.id === id)

    if(newUserData.first_name) {
        userToBeUpdated.first_name = newUserData.first_name
    }

    if(newUserData.last_name) {
        userToBeUpdated.last_name = newUserData.last_name
    }

    if(newUserData.email) {
        userToBeUpdated.email = newUserData.email
    }

    if(newUserData.password) {
        userToBeUpdated.password = newUserData.password
    }

    if(newUserData.birthday) {
        userToBeUpdated.birthday = newUserData.birthday
    }

    return userToBeUpdated
}

module.exports = {
    showAllUsers,
    addUser,
    showUser,
    removeUser,
    updateUser
}