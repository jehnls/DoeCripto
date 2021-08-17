import { Router } from "express";
import { DonationController } from "@controllers/DonationController";
import { InstitutionController } from "@controllers/InstitutionController";
import { WelcomeController } from "./controllers/WelcomeController";
import { CategoryController } from "@controllers/CategoryController";

const router = Router();

const welcomeController = new WelcomeController();
const donationController = new DonationController();
const institutionController = new InstitutionController();
const categoryController = new CategoryController();

router.get("/", welcomeController.handle);

router.post("/donation", donationController.create);
router.post("/institution", institutionController.create);
router.post("/category", categoryController.create);

router.post("/category", categoryController.create);

export { router };
