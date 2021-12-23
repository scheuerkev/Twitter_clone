const router = require('express').Router();
const {
    signup,
    signupForm,
    updateImage,
    userProfile,
    userList,
    followUser,
    unfollowUser,
    emailLinkVerification,
    initResetPassword,
    resetPasswordForm
} = require('../controllers/users.controllers');

const {ensureAuthenticated} = require("../config/guards.config");

router.get('/', userList);
router.get('/follow/:userId', followUser);
router.get('/unfollow/:userId', unfollowUser);
router.get('/:username', userProfile);
router.get('/signup/form', signupForm);
router.post('/signup', signup);
router.post('/update/image', ensureAuthenticated, updateImage);
router.get('/email-verification/:userId/:token', emailLinkVerification);
router.post('/forgot-password', initResetPassword);
router.get('/reset-password/:userId/:token', resetPasswordForm)

module.exports = router;