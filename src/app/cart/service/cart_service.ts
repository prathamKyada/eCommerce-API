import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Cart } from "../../../models/cart";
import {
  FAIL_STATUS_CODE,
  MESSAGES_FAILURE,
  MESSAGES_SUCCESS,
  SUCCESS_STATUS_CODE,
} from "../../../Common/Others/message";
const prisma = new PrismaClient();

class cart {
  //#region Add To Cart
  add_to_cart = async (req: Request, res: Response) => {
    try {
      const carts = await prisma.cart_details.findMany({
        where: {
          userId: parseInt(req.params.id),
        },
        include: {
          user_address: true,
        },
      });
      res.status(SUCCESS_STATUS_CODE.S_ST206).send(MESSAGES_FAILURE.MESSAGE_13);
    } catch (error) {
      console.log("add to cart error > ", error);
      res.status(FAIL_STATUS_CODE.F_ST402).send(MESSAGES_FAILURE.MESSAGE_6);
    }
  };
  //#endregion

  //#region Add Product
  add_product_in_cart = async (req: Request, res: Response) => {
    let user_data: Cart = {
      product_id: req.body.product_id,
      price: req.body.price,
      quantity: req.body.product_id,
      total_amount: req.body.total_amount,
    };
    try {
      const carts = await prisma.cart_details.upsert({
        where: {
          product_id_userId: {
            product_id: user_data.product_id,
            userId: parseInt(req.params.id),
          },
        },
        update: {
          quantity: user_data.quantity,
          total_amount: user_data.total_amount,
          price: user_data.price,
        },
        create: {
          product_id: user_data.product_id,
          quantity: user_data.quantity,
          total_amount: user_data.total_amount,
          price: user_data.price,
          userId: parseInt(req.params.id),
        },
      });
      console.log("updated > ", carts);
      res.status(SUCCESS_STATUS_CODE.S_ST207).send(MESSAGES_SUCCESS.MESSAGE_2);
    } catch (error) {
      console.log("add product in cart error > ", error);
      res.status(FAIL_STATUS_CODE.F_ST402).send(MESSAGES_FAILURE.MESSAGE_6);
    }
  };
  //#endregion

  //#region Delete cart
  delete_prorduct_in_cart = async (req: Request, res: Response) => {
    try {
      const carts = await prisma.cart_details.delete({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.status(SUCCESS_STATUS_CODE.S_ST208).send(MESSAGES_SUCCESS.MESSAGE_3);
    } catch (error) {
      console.log("delete product in cart > ", error);
      res.status(FAIL_STATUS_CODE.F_ST402).send(MESSAGES_FAILURE.MESSAGE_6);
    }
  };
  //#endregion
}

export default new cart();
