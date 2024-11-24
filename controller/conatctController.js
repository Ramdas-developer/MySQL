const Contact = require("../models/contactModel")

const createContact = async(req,res)=>{
    try {
        const {firstName,current_address} = req.body        
        const newUser = await Contact.create({firstName,current_address});
        res.status(200).json({success:true, message:"New user created successfully", NewUser:newUser})
        console.log("new user created succesfully:",newUser)
        
    } catch (error) {
        res.status(500).json({success:false, message:"failed to created new User", error:error.message});
        console.log("failed to created new user:",error)
    }
}

const getContact = async(req,res)=>{
    try {
        const allUser = await Contact.findAll();
        res.status(200).json({success:true, message:"All User get Successfully", All_User:allUser});
        console.log("All User get successfully :",allUser) 
    } catch (error) {
        res.status(500).json({success:false, message:"failed to created new User", error:error.message});
        console.log("failed to created new user:",error)  
    }
}

const updateContact = async(req,res)=>{
    try {
        const {id} = req.params;
        const {firstName,current_address} = req.body;

        const user = await Contact.findByPk(id);
        if(!user){
            res.status(404).json({success:false, message:"User not found and check user is available or not."})
        }
        await user.update({firstName,current_address});
        res.status(200).json({success:true, message:"User updated successfully", Updated_User:user});
        console.log("User Updated Successfully:",user);

    } catch (error) {
        res.status(500).json({success:false, message:"failed to updated new User", error:error.message});
        console.log("failed to updated new user:",error)
    }
}

const deleteContact = async(req,res)=>{
    try {
        const {id} = req.params;
        const {firstName,current_address} = req.body;
        
        const user = await Contact.findByPk(id);
        if(!user){
            res.status(404).json({success:false, message:"User not found and check user is available or not."})
        }

        await user.destroy();
        res.status(200).json({success:true, message:"User deleted successfully", Updated_User:user});
        console.log("User deleted Successfully:",user);
        

    } catch (error) {
        res.status(500).json({success:false, message:"failed to delete new User", error:error.message});
        console.log("failed to delete new user:",error)  
    }
}

module.exports = {createContact, getContact, updateContact,deleteContact}