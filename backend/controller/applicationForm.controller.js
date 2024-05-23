import ApplicationForm from "../models/applicationForm.model.js";

export const submit = async (req, res) => {
    try {
        const { docName,
            hospital,
            classroom,
            position,
            record,
            confirmDate,
            userId } = req.body;

        const appForm = await ApplicationForm.findOne({ userId });
        if (appForm) {
            return res.status(400).json({ error: "申请已经提交，请勿重复申请" })
        }
        const newAppForm = new ApplicationForm({
            docName,
            hospital,
            classroom,
            position,
            record,
            confirmDate,
            userId
        })
        if (newAppForm) {
            await newAppForm.save();
            res.send(JSON.stringify("申请成功"));
        }
    } catch (error) {
        console.log("error in applicationForm submit controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const getById = async (req, res) => {
    try {
        const { id: userId } = req.params;
        const appForm = await ApplicationForm.findOne({ userId });
        if (appForm) {
            return res.send(JSON.stringify(appForm))
        }
        return res.status(400).json({ error: "您还未提交申请" })
    } catch (error) {
        console.log("error in applicationForm getById controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const getAll = async (req, res) => {
    try {

        const forms = await ApplicationForm.find();

        if (!forms) return res.status(200).json([]);

        res.status(200).send(forms);
    } catch (error) {
        console.log("Error in getArticles controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}
export const pass = async(req, res) => {
    try {
        const { id: formId } = req.params;
        console.log(formId);
        const appForm = await ApplicationForm.findByIdAndUpdate({ _id: formId }, {isPass: true});
        if (appForm) {
            return res.send(JSON.stringify("已通过"))
        }
        return res.status(400).json({ error: "通过失败" })
    } catch (error) {
        console.log("error in applicationForm pass controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}