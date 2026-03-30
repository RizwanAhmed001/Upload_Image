import mongoose from "mongoose";

const imageSchema = ({
  name: {type: String, required: true},
  image: {type: String, required: true}
});

const ImageModel = mongoose.models.Image || mongoose.model("Image", imageSchema);

export default ImageModel;