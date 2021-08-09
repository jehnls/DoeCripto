import { Router } from "express";
import { CreateDonationController } from "@controllers/DonationController";
import { CreateInstitutionController } from "@controllers/InstitutionController";
import { WelcomeController } from "./controllers/WelcomeController";

const router = Router();

const welcomeController = new WelcomeController();
const createDonationController = new CreateDonationController();
const createInstitutionController = new CreateInstitutionController();

router.get("/", welcomeController.handle);

router.post("/donation", createDonationController.handle);
router.post("/institution", createInstitutionController.handle);

export { router };
