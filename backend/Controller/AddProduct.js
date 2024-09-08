const Product = require("../Models/ProductModel");
const cloudinary = require("cloudinary").v2;

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  console.log("Temp file path: ", file.tempFilePath);

  if (quality) {
    options.quality = quality;
  }

  options.resource_type = "auto";

  return await cloudinary.uploader
    .upload(file.tempFilePath, options)
    .then(console.log("upload successfully"))
    .catch((error) => console.log(error));
}

const AddProduct = async (req, res) => {
  try {
    let products = await Product.find({});
    let id;

    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }

    let file = req.files.imageURL;

    console.log("File : ", file);

    // validation supported extensions
    const supportedTypes = ["jpg", "jpeg", "png"];

    const fileType = file.name.split(".")[1].toLowerCase();

      console.log("File Type : ", fileType);

      if (!isFileTypeSupported(fileType, supportedTypes)) {
        return res.status(400).json({
          success: false,
          message: "File Formate or type not supported",
        });
      }

      // file format is supported
      console.log("uploading to folder");

      // cloudinary.uploader.upload(file.tempFilepath, "Folder");
      const response = await uploadFileToCloudinary(file, "ECommerce");
      console.log(response);

    const product = await Product.create({
      id: id,
      name: req.body.name,
      imageURL: response.secure_url,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    console.log(product);
    product.save();

    console.log("Saved");

    res.status(200).json({
      success: true,
      name: req.body.name,
      imageURL: response.secure_url,
      message: "Product and image saved successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error,
      message: "Something went wrong",
    });
  }
};

module.exports = AddProduct;