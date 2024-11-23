    const {Router} = require("express");
    const { createUser, getUser, updateUser, deleteUser } = require('../controller/userController');
const { useResolvedPath } = require("react-router-dom");

    
    const userRoute = Router();

    userRoute.post('/create', createUser);
    userRoute.get('/get',getUser);
    userRoute.put('/update/:id',updateUser);
    userRoute.delete('/delete/:id',deleteUser)

    module.exports = userRoute;



