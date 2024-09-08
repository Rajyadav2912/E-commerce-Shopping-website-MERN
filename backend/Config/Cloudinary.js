
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

const cloudinaryConnect = ()=>{
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
            secure: true,
        });
          console.log("Cloudinary connection successful");
    }
    catch(err){
        console.error('Error connecting to cloudinary: ', err);
        process.exit(1);
    }
}

module.exports = cloudinaryConnect;