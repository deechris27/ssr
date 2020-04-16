const express = require('express');
const {register} = require('../controller/auth');

const router = express.Router();

const {userRegisterValidator} = require('../validator/auth');
const {runValidation} = require('../validator/index');

router.post('/register', userRegisterValidator, runValidation, register);

router.get('/test', (req, res)=>{
    res.send("test test test");
});

module.exports = router;