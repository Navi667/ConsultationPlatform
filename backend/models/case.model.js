import mongoose from "mongoose";

const caseSchema = new mongoose.Schema(
    {
        userId: {
            type:String,
            required:true,
        },
        content: {
            type:String,
            required:true,
        },
    },
    {timestamps: true}
);
const Case = mongoose.model("Case",caseSchema);

export default Case;