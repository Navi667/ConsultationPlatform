import Doc from "../models/doctor.model.js";

export const addDoc = async (req, res) => {
    try {
        const { docName,
            hospital,
            classroom,
            position,
            record,
            userId } = req.body;

        const docInformation = await Doc.findOne({userId});
        if(docInformation){
            return res.status(400).json({ error: "该医生用户已存在，请勿重复添加" })
        } 
        const newDoc = new Doc({
            docName,
            hospital,
            classroom,
            position,
            record,
            userId
        });
        if(newDoc){
            await newDoc.save();
            res.send(JSON.stringify("添加成功"))
        }
    } catch(error) {
        console.log("error in doctor controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}