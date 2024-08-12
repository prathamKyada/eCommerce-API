import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { user_registration_interface } from "../../../models/user_register";
import generateTokenAndCookie from "../../../Common/utils/generate_jet_token";
import { JsonWebTokenError, Jwt } from "jsonwebtoken";
import { MESSAGES_FAILURE, SUCCESS_STATUS_CODE, FAIL_STATUS_CODE, MESSAGES_SUCCESS } from "../../../Common/Others/message";
const prisma = new PrismaClient();

class user_registration {
  //#region Registration

  add_user_register = async (req: Request, res: Response) => {
    try {
      const user_data = req.body.user_data;

      const newUser = await prisma.registration_details.create({
        data: {
          full_name: user_data.full_name,
          email_id: user_data.email_id,
          user_name: user_data.user_name,
          password: user_data.password,
          date_of_birth: new Date(user_data.date_of_birth),
          contact_number: user_data.contact_number,
        },
      });

      // const token = generateTokenAndCookie(
      //   newUser.user_name,
      //   newUser.password,
      //   res
      // );

      // res.cookie('authToken', token, {
      //   httpOnly: true, 
      //   secure: false, 
      //   maxAge: 86400000, 
      //   sameSite: 'strict',
      // });

      res.status(SUCCESS_STATUS_CODE.S_ST204).json({
        message: MESSAGES_SUCCESS.MESSAGE_1,
        user: {
          id: newUser.id,
          full_name: newUser.full_name,
          email_id: newUser.email_id,
          user_name: newUser.user_name,
        },
      });
    } catch (error) {
      // console.log("Error while storing user registration data: ", error);
      res.status(FAIL_STATUS_CODE.F_ST401).send(MESSAGES_FAILURE.MESSAGE_6);
    }
  };
  //#endregion Registration

  //#region Login
  login_user = async (req: Request, res: Response) => {
    let login_data = {
      email_id: req.body.email_id,
      user_name: req.body.user_name,
      password: req.body.password,
    };

    try {
      if (
        (!login_data.email_id || !login_data.password) &&
        (!login_data.user_name || !login_data.password)
      ) {
        return res.status(SUCCESS_STATUS_CODE.S_ST201).send(MESSAGES_FAILURE.MESSAGE_3);
      }

      let users: any;
      if (login_data.email_id) {
        users = await prisma.registration_details.findUnique({
          where: { email_id: login_data.email_id },
        });
      } else {
        users = await prisma.registration_details.findUnique({
          where: { user_name: login_data.user_name },
        });
      }

      if (!users) {
        return res.status(SUCCESS_STATUS_CODE.S_ST203).send(MESSAGES_FAILURE.MESSAGE_4);
      }
      // console.log("password > ", login_data.password);
      // console.log("email  > ", login_data.email_id);
      // console.log("user name > ", login_data.user_name);

      const user = await prisma.registration_details.findMany({
        where: {
          OR: [
            { email_id: login_data.email_id },
            { user_name: login_data.user_name },
          ],
          AND: [{ password: login_data.password }],
        },
      });

      if (!user) {
        return res.status(SUCCESS_STATUS_CODE.S_ST203).send(MESSAGES_FAILURE.MESSAGE_4);
      }

      res.send("Login Successfully");
    } catch (error) {
      console.log("error while login user > ", error);
      res.status(FAIL_STATUS_CODE.F_ST400).send(MESSAGES_FAILURE.MESSAGE_5);
    }
  };
  //#endregion Login
}

export default new user_registration();
