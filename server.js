import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import imageRoute from "./routes/image.route.js";
dotenv.config();


const app = express();
connectDB();

app.use(express.json());

app.use("/api", imageRoute)

app.get("/", (req, res) => {
  res.send("API WORKING!")
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server Running At Port http://localhost:${port}`)
})

