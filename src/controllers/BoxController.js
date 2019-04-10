const Box = require("../models/Box");

class BoxController {
    constructor() {}

    async store(req, res) {
        const box = await Box.create(req.body);

        res.json(box);
    }

    async list(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: "files",
            options: { sort: { created_at: -1 } }
        });

        return res.json(box);
    }
}

module.exports = new BoxController();
