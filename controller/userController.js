const User = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    console.log("req.body :", req.body);
    const newUser = await User.create({ firstName, lastName });
    res.status(200).json({success: true,message: "New user create successfully",data: newUser,});
    console.log("new User:",newUser)

  } catch (error) {
    console.log("New user not created", error);
    res.status(400).json({
      success: false,
      message: "New user not created",
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const details = await User.findAll();
    res
      .status(200)
      .json({ success: true, message: "All user details.", details: details });
    console.log("User get successfully :", details);
  } catch (error) {
    console.log("User are not found", error);
    res.status(400).json({success: true, message: " Users are not found", error: error.message});
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    const user = await User.findByPk(id);
    console.log("user :", user);
    if (!user) {
      return res.status(404).json({ success: false, message: "user not found" });
    }

    await user.update({ firstName, lastName });
    res.status(200).json({success: true,message: "User updated successfully",UpdatedUser: user});
    
  } catch (error) {
    console.log("User fetching error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).json({ message: "User not found", success: false });
      console.log("User not found");
    }

    await user.destroy();
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      DeletedUser: user,
    });
    console.log("User successfully deleted :",user)
  } catch (error) {
    console.log("User fetching error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };
