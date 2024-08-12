import express from "express";
import user_service from "../service/user_service"

const app = express.Router();

app.get('/all-product', user_service.get_product_list)

app.get('/all-company-wise-product', user_service.get_company_wise_product)

app.get('/all_category-wise-product', user_service.get_product_category_wise_product)

app.get('/all_sub_category-wise-product', user_service.get_product_sub_category_wise_product)


export default app;
