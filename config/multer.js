import multer from "multer";

// Upload File But You Cant See Your File
// const storage = multer.memoryStorage();

// export const upload = multer({
//   storage,
//   limits: {
//     fieldSize: 5 * 1024 * 1024
//   }
// });

// Better version
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

export const upload = multer({storage});