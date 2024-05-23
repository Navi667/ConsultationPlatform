import mongoose from "mongoose";

const applicationFormSchema = new mongoose.Schema(
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
        confirmDate: {
            type:String,
            default:""
        },
        userId: {
            type:String,
            default:""
        },
        isPass:{
            type:Boolean,
            default:false
        }
    },
    {timestamps: true}
);
const ApplicationForm = mongoose.model("ApplicationForm",applicationFormSchema);

export default ApplicationForm;