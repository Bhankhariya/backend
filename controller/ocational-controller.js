const Ocational = require("../models/ocational-model");

const ocationalForm = async (req,res) => {
try {
    const response = req.body;
    await Ocational.create(response);
    return res.status(200).json({message:"message send successfully"});
} catch (error) {
    return res.status(500).json({message:"message not send"});
}

};

module.exports = ocationalForm;