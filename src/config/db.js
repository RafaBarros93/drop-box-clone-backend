const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://admin:123@cluster0-kgkln.mongodb.net/drop?retryWrites=true",
    { useNewUrlParser: true }
);

module.exports = mongoose;
