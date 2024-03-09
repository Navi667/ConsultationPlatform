import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
        },
        desc: {
            type:String,
            required:true,
        },
        author: {
            type:String,
            default:""
        },
        category: {
            type:String,
            default:""
        },
        bgImg: {
            type:String,
            default:""
        },
        content: {
            type:String,
            default:""
        },
        status: {
            type:String,
            default:""
        }
    },
    {timestamps: true}
);
const Article = mongoose.model("Article",articleSchema);

export default Article;