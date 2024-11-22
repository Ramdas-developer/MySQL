    const {Router} = require("express");
    const { createUser } = require('../controller/userController');

    
    const userRoute = Router();

    userRoute.post('/create', createUser);

    module.exports = userRoute;



