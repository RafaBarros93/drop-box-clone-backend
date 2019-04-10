const mongoose = require("../config/db");

const BoxSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        files: [{ type: mongoose.Schema.Types.ObjectId, ref: "Files" }]
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updatedAt_at" } }
);

const Box = mongoose.model("BOX", BoxSchema);

module.exports = Box;
