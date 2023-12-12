module.exports = async (req, res) => {
    if (req.method == "GET") {
        res.send("OKAY")
    }
};