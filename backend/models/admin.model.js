import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        adminUsername: {
            type:String,
            required:true,
            unique:true
        },
        adminPassword: {
            type:String,
            required:true,
            minlength:6
        },
        permission: {
            type:String,
            default:""
        }
    },
    {timestamps: true}
);
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;