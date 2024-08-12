import { Request, Response, NextFunction } from "express";
import { user_registration_interface } from "../../models/user_register";
import bcrypt from "bcrypt";

import { PrismaClient } from "@prisma/client";
import { FAIL_STATUS_CODE, MESSAGES_FAILURE } from "../Others/message";
const prisma = new PrismaClient();

class all_middleware {
  validateUserRegistration = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let user_data: user_registration_interface = {
      full_name: req.body.first_name + " " + req.body.last_name,
      email_id: req.body.email_id,
      user_name: req.body.user_name,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
      date_of_birth: req.body.date_of_birth,
      contact_number: req.body.contact_number,
    };

    try {
      if (user_data.password !== user_data.confirm_password) {
        return res.status(FAIL_STATUS_CODE.S_ST205).send(MESSAGES_FAILURE.MESSAGE_7);
      }

      // Check if email already exists
      const existingEmail = await prisma.registration_details.findUnique({
        where: { email_id: user_data.email_id },
      });

      if (existingEmail) {
        return res.status(FAIL_STATUS_CODE.S_ST206).send(MESSAGES_FAILURE.MESSAGE_8);
      }

      // Check if username already exists
      const existingUsername = await prisma.registration_details.findUnique({
        where: { user_name: user_data.user_name },
      });

      if (existingUsername) {
        return res.status(FAIL_STATUS_CODE.S_ST207).send(MESSAGES_FAILURE.MESSAGE_9);
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      user_data.password = await bcrypt.hash(user_data.password, salt);

      req.body.user_data = user_data;
      next();
    } catch (error) {
      console.log("Error while validating user registration: ", error);
      res.status(500).send(MESSAGES_FAILURE.MESSAGE_10);
    }
  };

}

export default new all_middleware();
