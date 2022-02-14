const express = require(`express`);
const router = express.Router();
const userController = require(`../middleware/usermiddleware`);

router.get(`/login`, userController.login);

router.post(`/login`, userController.logincheck);

router.get(`/profile`, userController.profile);

router.get(`/logout`, userController.logout);

module.exports = router;
