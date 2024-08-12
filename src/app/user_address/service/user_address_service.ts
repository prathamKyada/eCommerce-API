import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { user_address } from "../../../models/user_address";
import { clearScreenDown } from "readline";
const prisma = new PrismaClient();

class user_address_details {

  user_address_details = async (req: Request, res: Response) => {
    let user_data: user_address = {
      house_number: req.body.house_number,
      society_name: req.body.society_name,
      landmark: req.body.landmark,
      pincode: req.body.pincode,
      state: req.body.state,
      city: req.body.city,
    };
    try {
      //   const user_stored_data = await prisma.user_address.create({
      //       data: {
      //           house_number: user_data.house_number,
      //           society_name: user_data.society_name,
      //           landmark: user_data.landmark,
      //           pincode: Number(user_data.pincode),
      //           state: user_data.state,
      //           city: user_data.city
      //       }
      //   })
      console.log(`user_data > `, user_data);
      res.send(user_data);
    } catch (error) {
      console.log("user_registration_error > ", error);
      res.send(error);
    }
  };

  view_all_address = async (req: Request, res: Response) => {
    try {
      const all_user_address = await prisma.user_address.findMany();
      console.log("all user address => ", all_user_address);
      res.send(all_user_address);
    } catch (error) {
      console.log("Error while view all address:", error);
      res.send(error);
    }
  };

  view_address_by_state = async (req: Request, res: Response) => {
    let user_state = {
      state: req.body.state,
    };
    try {
      const display_user_address_state_wise = await prisma.user_address.findMany({
        where: {
            state: user_state.state
        },
      });
      console.log("state wise user address: ", display_user_address_state_wise)
      res.send(display_user_address_state_wise)
    } catch (error) {
      console.log("Error while state wise view address:", error);
      res.send(error);
    }
  };

  view_address_by_city = async (req: Request, res: Response) => {
    let user_city = {
      city: req.body.city,
    };
    try {
      const display_user_address_city_wise = await prisma.user_address.findMany({
        where: {
            state: user_city.city
        },
      });
      console.log("state wise user address: ", display_user_address_city_wise)
      res.send(display_user_address_city_wise)
    } catch (error) {
      console.log("Error while city wise view address:", error);
      res.send(error);
    }
  };

  view_address_by_pincode = async (req: Request, res: Response) => {
    let user_state = {
      pincode: req.body.pincode,
    };
    try {
      const display_user_pincde_state_wise = await prisma.user_address.findMany({
        where: {
            pincode: user_state.pincode
        },
      });
      console.log("state wise user address: ", display_user_pincde_state_wise)
      res.send(display_user_pincde_state_wise)
    } catch (error) {
      console.log("Error while pincode wise view address:", error);
      res.send(error);
    }
  };
}

export default new user_address_details();
