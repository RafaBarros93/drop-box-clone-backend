const express = require("express");
const path = require("path");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    socket.on("connectRoom", (box) => {
        socket.join(box);
    });
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(require("./routes/routes"));

server.listen(process.env.PORT || 3002);
