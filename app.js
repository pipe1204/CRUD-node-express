const express = require('express')
const userRouter = require('./userDatabase/users.router')

const app = express()

app.use(express.json())

const port = 3002

app.get('/', (req, res) => {
    res.status(200).json({message: "Everything OK"})
})

app.use('/', userRouter)

app.listen(port, () => {
    console.log('Server is running in port 3002');
})