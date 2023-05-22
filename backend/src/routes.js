
const router = require('express').Router();
const jwt = require('jsonwebtoken');

//import controllers
const UserController = require('./controllers/UserController')

const authenticateJWT = require('./auth')

let keyToken = process.env.KEY_TOKEN


router.post('/login', UserController.login)

/*
router.post('/cliente', authenticateJWT, UserController.cliente)
*/

module.exports = router