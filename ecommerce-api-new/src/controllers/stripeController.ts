import { Request, Response } from "express";
import { db } from "../config/db";
import { STRIPE_SECRET_KEY } from "../constants/env";
const stripe = require('stripe')(STRIPE_SECRET_KEY);

export const checkoutSessionHosted = async (req: Request, res: Response) => {
};

export const checkoutSessionEmbedded = async (req: Request, res: Response) => {
};

export const webhook = async (req: Request, res: Response) => {
};
