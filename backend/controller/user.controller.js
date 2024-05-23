import User from "../models/user.model.js";

export const getUsersForSidebar = async(req, res) => {
    try{

        const loggedUserId = req.user._id;

        const filteredUsers = await User.find({_id: {$ne: loggedUserId}}).select("-password");

        res.status(200).json(filteredUsers);

    }catch(error) {
        console.error("error in getUserForSideBar", error.message);
        res.status(500).json({error: "internal server error"})
    }
}

export const getAllUsers = async(req, res) => {
    try{

        const users = await User.find().select("-password");

        res.status(200).json(users);

    }catch(error) {
        console.error("error in getUsers for admin", error.message);
        res.status(500).json({error: "internal server error"})
    }
}