import cloudinary from "cloudinary";

console.log(process.env.api_key)
const cloudinaryConfig = {
  cloud_name: process.env.cloud_Name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
}

cloudinary.config(cloudinaryConfig);

export default cloudinary;