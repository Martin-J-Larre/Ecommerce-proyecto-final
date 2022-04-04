const Newsletter = require("../models/NewsletterModel");

const getNewsletters = async (req, res) => {
    try {
        const mails = await Newsletter.find();
        res.status(200).json(mails);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getNewsletters
}