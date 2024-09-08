const express = require("express");
const app = express();

// load .env configuration
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// const PORT = 4000;

// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// const Product = require("./Models/ProductModel");
// const Users = require("./Models/UserModel");
// const fetchUser = require("./Models/fetchUser");

// DATABASE connetions with MongoDB
const connect = require("./Config/database");
connect();

// Connect To Cloudinary Server
const cloudinaryConnect = require("./Config/Cloudinary");
cloudinaryConnect();

// Routes import
const ALL_Routes = require("./Routes/Routes");

// const Upload = require("./Routes/Routes")

// API Creation
// Image storage Engine
// const storage = multer.diskStorage({
//   destination: "./upload/images",
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// app.use("/api/v1/upload", Upload);

// const upload = multer({ storage: storage });

// app.use("/images", express.static("upload/images"));

// creating Uploade endpoint for image
// app.post("/upload", upload.single("product"), (req, res) => {
//   res.json({
//     success: 1,
//     image: `http://localhost:${PORT}/images/${req.file.filename}`,
//   });
// });

// Routes
app.use("/api/v1", ALL_Routes); // 👍

app.get("/", (req, res) => {
  res.send(`E-commerce Backend APP is Running PORT No. ${PORT} successfully`);
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is running on port : " + PORT);
  } else {
    console.log("Error : " + error);
  }
});
