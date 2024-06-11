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

export const getDocByClass = async(req, res) => {
    try {
        const { classroom } = req.body;

        const doctors = await Doc.find({
            classroom
        })

        if (!doctors) return res.status(200).json([]);

        res.status(200).send(doctors);
    } catch (error) {
        console.log("Error in getDocByClass controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}
export const getDocByUserId = async(req, res) => {
    try{
        const {userId} = req.body;
        const doctor = await Doc.find({
            userId
        })
        if(!doctor) return res.status(200).json("");
        res.status(200).send(doctor);
    }catch{
        console.log("Error in getDocByUserId controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}