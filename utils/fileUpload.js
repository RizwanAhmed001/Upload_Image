import cloudinary from "../config/cloudinary.js";

export const uploadImageToCloudinary = async (folder, filePath) => {
  try {
    return await cloudinary.uploader.upload(filePath, { folder });
  } catch (error) {
    return { error };
  }
};
