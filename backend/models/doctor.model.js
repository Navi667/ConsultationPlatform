import mongoose from "mongoose";

const docSchema = new mongoose.Schema(
    {
        docName: {
            type:String,
            required:true,
        },
        classroom: {
            type:String,
            required:true,
        },
        hospital: {
            type:String,
            default:""
        },
        position: {
            type:String,
            default:""
        },
        record: {
            type:String,
            default:""
        },        
        userId: {
            type:String,
            default:""
        }
    },
    {timestamps: true}
);
const Doc = mongoose.model("Doctor", docSchema);

export default Doc;