import express from "express";
import admin_service from "../service/admin_service";
import multer from "multer";
import path from "path";

const app = express.Router();

// Middleware to serve static files
app.use("/upload", express.static(path.join(__dirname, "./upload")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.post("/add-company", admin_service.add_company_name);

app.post("/add-product-category", admin_service.add_product_category);

app.post("/add-product-sub-category", admin_service.add_product_sub_category);

app.post("/add-product-details", upload.single("product_image"), admin_service.add_product_details);

export default app;
