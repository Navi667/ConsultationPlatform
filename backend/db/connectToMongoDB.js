import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
            console.log("connect to mongodb")
    } catch (error) {
        console.log("error connect to mongodb")
    }
};

export default connectToMongoDB;