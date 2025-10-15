import { Request, Response } from "express";
import { WaitlistService } from "../services/waitListServices";

export class WaitlistController {
  static async addToWaitlist(req: Request, res: Response) {
    try {
      console.log("Request Body:", req.body);
      const result:any = await WaitlistService.addUser(req.body);
      res.status(201).json({ message: "User added to waitlist", result:result });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}
