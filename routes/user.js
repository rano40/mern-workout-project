const express = require('express')

// controller functions
const { loginUser, SignupUser } = require('../controllers/userController')

const router = express.Router()

// Login Route
router.post('/login', loginUser)


// Signup Route
router.post('/signup', SignupUser)
  

module.exports = router