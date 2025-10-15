import { Router } from "express";
import { WaitlistController } from "../controller/waitListController";

const router = Router();

router.post("/waitlist", WaitlistController.addToWaitlist);


export default router;