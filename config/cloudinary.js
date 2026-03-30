import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const cloudinaryConfig = {
  cloud_name: process.env.cloud_Name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
}

cloudinary.config(cloudinaryConfig);

export default cloudinary;