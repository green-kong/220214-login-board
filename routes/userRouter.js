const express = require(`express`);
const router = express.Router();
const userController = require(`../middleware/usermiddleware`);

router.get(`/login`, userController.login);

router.post(`/login`, userController.logincheck);

router.get(`/profile`, userController.profile);

router.get(`/logout`, userController.logout);

<<<<<<< HEAD
router.post('/join'(userController.create))

router.post('/quit'(userController.destroy))

module.exports = router
=======
module.exports = router;
>>>>>>> 59c675959cbfe6a6ac974eabadcf4baa620c4e4d
