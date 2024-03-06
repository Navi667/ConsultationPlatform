import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
     const {adminUsername, adminPassword} = req.body;
 
     const admin = await Admin.findOne({adminUsername});
     if(admin) {
         return res.status(400).json({error:"Admin already exists"})
     }
 
     //HASH PASSWORD HERE
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(adminPassword, salt);
 
 
     const newAdmin = new Admin({
         adminUsername,
         adminPassword: hashedPassword,
         permission: "admin"
     })
 
    if(newAdmin){
     generateTokenAndSetCookie(newAdmin._id, res)
     await newAdmin.save();
 
     res.status(201).json({
         _id: newAdmin._id,
         username: newAdmin.adminUsername,
         permission: "admin"
     })
    }
 
    }catch(error) {
     console.log("error in admin signup controller", error.message);
     res.status(500).json({error:"Internal Server Error"})
    }
 
 }

 export const login = async (req, res) => {
    try{
        const {adminUsername, adminPassword} = req.body;
        const admin = await Admin.findOne({adminUsername});
        const isPasswordCorrect = await bcrypt.compare(adminPassword, admin.adminPassword || "");

        if(!admin || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid credentials"})
        }
        generateTokenAndSetCookie(admin._id, res);
        res.status(200).json({
            _id: admin._id,
            username: admin.adminUsername,
            permission: admin.permission
        })
    }catch(error) {
        console.log("error in admin login controller", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "logged out successfully"});

    } catch(error){
        console.log("error in logout controller", error.message);
        res.status(500).json({error: "internal server error"})
    }
}