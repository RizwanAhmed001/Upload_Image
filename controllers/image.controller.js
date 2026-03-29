import { uploadImageToCloudinary } from "../utils/fileUpload.js";

export const uploadImage = async (req, res) => {
  try {
    const file = req.file;

    if(!file){
      return res.status(400).json({message: "File Not Found!"})
    }

    const uploadFile = await uploadImageToCloudinary(file, "uploads")

    console.log(uploadFile);

    return res.status(200).json({
      message: "File Upload Success"
    })


  } catch (error) {
    return res.status(500).json({error: error})
  }
}