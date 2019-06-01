const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const routes = require("./routes/routes");
const cors = require("cors");

class App {
    constructor() {
        this.express = express();
        this.miiddlewares();
        // this.database();
        this.routes();
    }

    miiddlewares() {
        this.express.use(express.json());
        this.express.use(cors());

        app.use(express.urlencoded({ extended: true }));
        app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

        io.on("connection", (socket) => {
            socket.on("connectRoom", (box) => {
                socket.join(box);
            });
        });

        app.use((req, res, next) => {
            req.io = io;

            return next();
        });
    }

    /* database() {
        mongoose.connect(
            "mongodb+srv://admin:123@cluster0-kgkln.mongodb.net/list?retryWrites=true",
            { useNewUrlParser: true }
        );
    } */
    routes() {
        this.express.use(routes);
    }
}

module.exports = new App().express;
