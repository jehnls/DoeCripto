import { Router } from "express";
import { DonationController } from "@controllers/DonationController";
import { InstitutionController } from "@controllers/InstitutionController";
import { WelcomeController } from "./controllers/WelcomeController";

const router = Router();

const welcomeController = new WelcomeController();
const donationController = new DonationController();
const institutionController = new InstitutionController();

router.get("/", welcomeController.handle);

router.post("/donation", donationController.create);
router.post("/institution", institutionController.create);

export { router };
