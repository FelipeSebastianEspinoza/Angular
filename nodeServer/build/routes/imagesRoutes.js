"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ImagesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", (req, res) => res.send("images"));
    }
}
const imagesRoutes = new ImagesRoutes();
exports.default = imagesRoutes.router;
