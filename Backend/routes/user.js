const express = require("express");
const {Login , Logout, Profile} = require('../controllers/user')

const router = express.Router();

router.post('/login', Login);
router.post('/profile', Profile);
router.get('/logout', Logout);

module.exports = router;