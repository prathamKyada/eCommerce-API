import Joi from "joi";

export const product_schema = Joi.object({
    product_name: Joi.string().required(),
    product_image_url: Joi.string().required(),
    product_description: Joi.string().required(),
    product_price: Joi.string().required(),
    company_id: Joi.number().required(),
    product_category_id: Joi.number().required(),
    product_sub_category_id: Joi.number().required()
})