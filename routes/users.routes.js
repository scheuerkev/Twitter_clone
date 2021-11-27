const router = require('express').Router();
const { signup, signupForm, updateImage} = require('../controllers/users.controllers');
const {ensureAuthenticated} = require("../config/guards.config");

router.get('/signup/form', signupForm);
router.post('/signup', signup);
router.post('/update/image', ensureAuthenticated, updateImage);

module.exports = router;