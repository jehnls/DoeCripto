import { Router } from "express";
import { CreateDonationController } from "./controllers/CreateDonationController";
import { CreateInstitutionController } from "./controllers/CreateInstitutionController";
import { WelcomeController } from "./controllers/WelcomeController";

const router = Router();

const welcomeController = new WelcomeController();
const createDonationController = new CreateDonationController();
const createInstitutionController = new CreateInstitutionController();

router.get("/", welcomeController.handle);

router.post("/donation", createDonationController.handle);
router.post("/institution", createInstitutionController.handle);

export { router };
