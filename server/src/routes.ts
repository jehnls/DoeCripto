import { Router } from "express";
import { CreateDonationController } from "@controllers/DonationController";
import { CreateInstitutionController } from "@controllers/InstitutionController";
import { WelcomeController } from "./controllers/WelcomeController";
import { CategoryController } from "@controllers/CategoryController";

const router = Router();

const welcomeController = new WelcomeController();
const createDonationController = new CreateDonationController();
const createInstitutionController = new CreateInstitutionController();
const categoryController = new CategoryController();

router.get("/", welcomeController.handle);

router.post("/donation", createDonationController.handle);
router.post("/institution", createInstitutionController.handle);

router.post("/category", categoryController.create);

export { router };
