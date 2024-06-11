import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {

        const loggedUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.error("error in getUserForSideBar", error.message);
        res.status(500).json({ error: "internal server error" })
    }
}

export const getAllUsers = async (req, res) => {
    try {

        const users = await User.find().select("-password");

        res.status(200).json(users);

    } catch (error) {
        console.error("error in getAllUsers controller", error.message);
        res.status(500).json({ error: "internal server error" })
    }
}

export const getUserById = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findOne({ _id: userId });
        if (!user) return res.status(200).json([]);
        res.status(200).send(user);
    } catch (error) {
        console.log("error in getUserById controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}