const mongoose = require("../config/db");

const FileSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        }
    },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updatedAt_at" },
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
);

FileSchema.virtual("url").get(function() {
    const url = process.env.URL || `http://localhost:3002`;

    return `${url}/files/${encodeURIComponent(this.path)}`;
});

const File = mongoose.model("Files", FileSchema);

module.exports = File;
