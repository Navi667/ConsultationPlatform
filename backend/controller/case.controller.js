import Case from "../models/case.model.js";

export const addCase = async (req, res) => {
    try {
        const { userId,
            content
        } = req.body;

        const caseInfo = await Case.findOne({ userId });
        if (caseInfo) {
            return res.status(400).json({ message: "该用户已提交病例，请勿重复添加" })
        }
        const newCase = new Case({
            userId,
            content
        });
        if (newCase) {
            await newCase.save();
            res.send(JSON.stringify("添加成功"))
        }
    } catch (error) {
        console.log("error in case add controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const getCaseByUserId = async (req, res) => {
    try {
        const { userId } = req.body;

        const caseInfo = await Case.find({ userId });
        if(!caseInfo) return res.status(200).json("");
        res.status(200).send(caseInfo);
    } catch (error) {
        console.log("error in case add controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}