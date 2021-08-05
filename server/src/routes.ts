import { Router } from "express";
import { CreateDonationController } from "./controllers/CreateDonationController";
import { WelcomeController } from "./controllers/WelcomeController";

const router = Router();

const welcomeController = new WelcomeController();
const createDonationController = new CreateDonationController();

router.get("/", welcomeController.handle);

router.post("/donation", createDonationController.handle);

export { router };
