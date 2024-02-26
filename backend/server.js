import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    //root route
    res.send("hello world")
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`app listen ${PORT}`)
});