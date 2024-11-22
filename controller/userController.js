const User = require('../models/userModel')

const createUser = async(req,res)=>{
    try {
        const {firstName,lastName} = req.body;
        console.log("req.body :",req.body)
        const userdata = await User.create({firstName,lastName});
        res.status(200).json({success:true, message:"New user create successfully", data:userdata})
    } catch (error) {
        console.log("New user not created", error)
        res.status(400).json({success:false, message:"New user not created", error:error.message})
    }
    
}

module.exports = {createUser};