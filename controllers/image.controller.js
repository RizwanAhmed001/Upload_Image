import ImageModel from "../models/image.model.js";
import { uploadImageToCloudinary } from "../utils/fileUpload.js";
import fs from "fs";

export const uploadImage = async (req, res) => {
  try {
    const file = req.file;

    const {name} = req.body;

    if(!file){
      return res.status(400).json({message: "File Not Found!"})
    }

    const path = file.path;

    const uploadFile = await uploadImageToCloudinary("uploads", path)

    console.log(uploadFile);

    if(uploadFile.secure_url){
      fs.unlink(path, (err) => {
        if(err){
          return err
        }
      }) 
    }

    const newImage = new ImageModel({name, image: uploadFile.secure_url});

    await newImage.save();

    return res.status(200).json({
      message: "File Upload Success"
    })




  } catch (error) {
    return res.status(500).json({error: error})
  }
}