import { Request, Response } from "express";

function indexWelcome(req: Request, res: Response): Response {
  return res.json("Welcome To My API");
}

export default indexWelcome;
