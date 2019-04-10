const express = require("express");

const multer = require("multer");
const multiConfig = require("../config/multer");

const routes = express.Router();

const BoxController = require("../controllers/BoxController");
const FileController = require("../controllers/FileController");

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.list);

routes.post(
    "/boxes/:id/files",
    multer(multiConfig).single("file"),
    FileController.store
);

module.exports = routes;
