import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Company } from "../../../models/company";
import { product_category } from "../../../models/product_category";
import { product_sub_category } from "../../../models/product_sub_category";
import { product_details } from "../../../models/product_details";
import {
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE,
  FAIL_STATUS_CODE,
  SUCCESS_STATUS_CODE,
} from "../../../Common/Others/message";

class admin_service {
  add_company_name = async (req: Request, res: Response) => {
    let data: Company = {
      company_name: req.body.company_name,
    };
    try {
      if (!data.company_name) {
        return res
          .status(FAIL_STATUS_CODE.F_ST208)
          .send(MESSAGES_FAILURE.MESSAGE_11);
      }
      const data_stored = await prisma.company.create({
        data: { company_name: data.company_name },
      });

      if (!data_stored) {
        return res
          .status(FAIL_STATUS_CODE.F_ST209)
          .send(MESSAGES_FAILURE.MESSAGE_12);
      }
      res.status(SUCCESS_STATUS_CODE.S_ST200).send(MESSAGES_SUCCESS.MESSAGE_1);
    } catch (error) {
      console.log("Error addUser > ", error);
      res.status(FAIL_STATUS_CODE.F_ST402).send(MESSAGES_FAILURE.MESSAGE_6);
    }
  };

  add_product_category = async (req: Request, res: Response) => {
    let data: product_category = {
      product_category_name: req.body.product_category_name,
    };
    try {
      if (!data.product_category_name) {
        return res.status(SUCCESS_STATUS_CODE.S_ST201).send(MESSAGES_FAILURE.MESSAGE_3)
      }
      const data_stored = await prisma.product_category.create({
        data: { product_category_name: data.product_category_name },
      });
      if (!data_stored) {
        return res.status(FAIL_STATUS_CODE.F_ST209).send(MESSAGES_FAILURE.MESSAGE_12)
      }
      res.status(SUCCESS_STATUS_CODE.S_ST200).send(MESSAGES_SUCCESS.MESSAGE_1)
    } catch (error) {
      console.log("Error addUser > ", error);
      res.status(FAIL_STATUS_CODE.F_ST402).send(MESSAGES_FAILURE.MESSAGE_6)
    }
  };

  add_product_sub_category = async (req: Request, res: Response) => {
    let data: product_sub_category = {
      product_category_id: req.body.product_category_id,
      product_sub_category_name: req.body.product_sub_category_name,
    };
    try {
      const data_store = await prisma.product_sub_category.create({
        data: {
          product_category_id: parseInt(data.product_category_id),
          product_sub_category_name: data.product_sub_category_name,
        },
      });
      res.json({ message: MESSAGES_SUCCESS.MESSAGE_1, data_store });
    } catch (error) {
      console.log("Add Product Sub Category error > ", error);
      res.send(error);
    }
  };

  add_product_details = async (req: Request, res: Response) => {
    let data: product_details = {
      product_name: req.body.product_name,
      product_description: req.body.product_description,
      product_image: req.file?.originalname.toString() ?? "",
      product_price: req.body.product_price,
      company_id: req.body.company_id,
      product_category_id: req.body.product_category_id,
      product_sub_category_id: req.body.product_sub_category_id,
    };
    try {
      // const { error } = product_schema.validate(req.body)
      // if(error) {
      //   return res.status(404).send("Incomplete Data")
      // }
      console.log("data > ", data);
      const data_store = await prisma.product_details.create({
        data: {
          product_name: data.product_name,
          product_description: data.product_description,
          product_image_url: data.product_image,
          product_price: data.product_price,
          company_id: parseInt(data.company_id),
          product_category_id: parseInt(data.product_category_id),
          product_sub_category_id: parseInt(data.product_sub_category_id),
        },
      });
      // console.log("data _ store > ",data_store)
      // console.log("req.body > ", req.body);
      // console.log("req.file >", req.file);
      res.status(SUCCESS_STATUS_CODE.S_ST205).send(MESSAGES_SUCCESS.MESSAGE_1)
    } catch (error) {
      console.log("Error add product details > ", error);
      res.status(FAIL_STATUS_CODE.F_ST402).send(MESSAGES_FAILURE.MESSAGE_10)
    }
  };
}

export default new admin_service();
