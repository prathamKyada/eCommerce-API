import jwt from "jsonwebtoken";
import { Response } from 'express';


const generateTokenAndCookie = (
    userName: string,
    password: string,
    res: Response
  ) => {
    let private_key = process.env.JWT_SECRET;
  
    if (!private_key) {
      throw new Error("JWT_SECRET is not defined");
    }
  
    const token = jwt.sign({ userName, password }, private_key, {
      expiresIn: "15d",
    });
  
    if (!token) {
      throw new Error("Failed to generate token");
    }
  
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
  
    return token;
  };

export default generateTokenAndCookie;