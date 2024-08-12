import { Request, Response } from "express";
import { product_details } from "../../../models/product_details";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class user_service {
  
  get_product_list = async (req: Request, res: Response) => {
    try {
      const all_product = await prisma.product_details.findMany();
      console.log("all Product > ", all_product);
      res.send(all_product);
    } catch (error) {
      console.log("All Product > ", error);
      res.send(error)
    }
  };

  get_company_wise_product = async (req: Request, res: Response) => {
    let company = {
      company_id: req.body.company_id
    };
    try {
      const all_compant_wise_product = await prisma.product_details.findMany({
        where: {
            company_id: company.company_id.toString(),
        },
      });
      console.log("all Product company wise > ", all_compant_wise_product);
      res.send(all_compant_wise_product);
    } catch (error) {
      console.log("All Product > ", error);
    }
  };

  get_product_category_wise_product = async (req: Request, res: Response) => {
    let company = {
        product_category_id: req.body.product_category_id
    };
    try {
      const all_product_category_wise_product = await prisma.product_details.findMany({
        where: {
            product_category_id: parseInt(company.product_category_id),
        },
      });
      console.log("all Product category wise > ", all_product_category_wise_product);
      res.send(all_product_category_wise_product);
    } catch (error) {
      console.log("All Product > ", error);
    }
  };

  get_product_sub_category_wise_product = async (req: Request, res: Response) => {
    let sub_category: product_details = {
      product_sub_category_id: req.body.product_sub_category,
      product_name: "",
      product_image: "",
      product_description: "",
      product_price: "",
      company_id: "",
      product_category_id: ""
    }
    try {
        const all_product_sub_category_wise_product = await prisma.product_details.findMany({
            where: {
                product_sub_category_id: parseInt(sub_category.product_sub_category_id),
            },
          });
          console.log("all Product sub category wise > ", all_product_sub_category_wise_product);
          res.send(all_product_sub_category_wise_product);
    } catch (error) {
        
    }
  }
}

export default new user_service();
