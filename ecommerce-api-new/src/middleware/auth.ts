import dotenv from 'dotenv';
import { NextFunction, Request, RequestExtended, Response } from 'express';
dotenv.config();
import jwt from 'jsonwebtoken';
import { IUser } from '../models/IUser';
import { ACCESS_TOKEN_SECRET } from '../constants/env';

declare module 'express' {
  export interface RequestExtended extends Request {
    user?: any;
  }
}

export const verifyAccessToken = (req: RequestExtended, res: Response, next: NextFunction) => {
  const bearer = req.headers['authorization'];
  const accessToken = bearer && bearer.split(' ')[1];
  
  if (accessToken === undefined) {
    res.sendStatus(401);
    return
  }


  jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (error: jwt.VerifyErrors | null, decoded?: string | jwt.JwtPayload | undefined) => {
    const user = decoded as IUser;
    if (error) {
      res.sendStatus(403);
      return 
    }
    req.user = user;
    next();
  })
}


export const verifyRefreshToken = (req: RequestExtended, res: Response, next: NextFunction): void => {
  const refreshToken = req.cookies.refreshToken;
  if (refreshToken === undefined) {
    res.sendStatus(401);
    return
  }
  jwt.verify(refreshToken, ACCESS_TOKEN_SECRET, (error: jwt.VerifyErrors | null, decoded?: string | jwt.JwtPayload | undefined) => {
    const user = decoded as IUser;
    if (error) {
      res.sendStatus(403);
      return 
    }
    req.user = user;
    next();
  })
}
