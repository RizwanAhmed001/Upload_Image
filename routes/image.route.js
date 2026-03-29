import express from "express";
import { upload } from "../config/multer.js";
import { uploadImage } from "../controllers/image.controller.js";


const imageRoute = express.Router();

imageRoute.post("/upload", upload.single("file"), uploadImage)

export default imageRoute;