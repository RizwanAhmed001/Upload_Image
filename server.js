import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import fileUpload from "express-fileupload";

dotenv.config();
connectDB();

const app = express();

app.use(fileUpload({
  useTempFiles: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API WORKING!")
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server Running At Port http://localhost:${port}`)
})

