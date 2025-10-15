import express, { Request, Response } from "express";

const app = express.Router();

app.get("/waiting-list", (req: Request, res: Response) => {
  const payload = req.body;
  res.send(payload);
});
