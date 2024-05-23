import path from "path";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js"
import articleRoutes from "./routes/article.routes.js"
import applicationRoutes from "./routes/applicationForm.routes.js";
import doctorRoutes from "./routes/doctor.route.js"

//apis
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(bodyParser.json());
app.use(cookieParser())

app.get("/", (req, res)=>{
    //root route
    res.send("hello world")
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/application", applicationRoutes);
app.use("/api/doctor", doctorRoutes);
app.use(express.static(path.join(__dirname, "/frontend/dist")))


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`app listen ${PORT}`)
});
