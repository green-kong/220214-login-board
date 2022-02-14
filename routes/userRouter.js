const express = require(`express`)
const router = express.Router()
const user = require(`../model/user`)
const login = require(`../middleware/login`)
const logincheck = require(`../middleware/logincheck`)
const profile = require(`../middleware/profile`)
const logout = require(`../middleware/logout`)

router.get(`/login`,login) 

router.post(`/login`,logincheck)

router.get(`/profile`,profile)

router.get(`/logout`,logout)

module.exports = router