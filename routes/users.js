const express = require('express')
const { users } = require('../controllers')

const router = express.Router()

router.post('/', users.create)

router.get('/new', users.new)

module.exports = router
