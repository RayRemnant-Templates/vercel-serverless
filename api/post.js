export default async function handler(req, res) {
    if (req.method == "POST") {
        const { body } = req;
        return res.send(body);
    }
}