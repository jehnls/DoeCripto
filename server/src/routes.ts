import { Router } from "express";
import { DonationController } from "@controllers/DonationController";
import { InstitutionController } from "@controllers/InstitutionController";
import { WelcomeController } from "./controllers/WelcomeController";
import { CategoryController } from "@controllers/CategoryController";
import { UserController } from "./controllers/UserController";
import { AuthenticateUserController } from "@controllers/AuthenticateUserController";

const router = Router();

const welcomeController = new WelcomeController();
const donationController = new DonationController();
const institutionController = new InstitutionController();
const categoryController = new CategoryController();
const userController = new UserController();
const authenticateUserController = new AuthenticateUserController();

router.get("/", welcomeController.handle);

router.post("/donation", donationController.create);
router.post("/institution", institutionController.create);
router.post("/category", categoryController.create);
router.post("/singUp", userController.create);
router.post("/singIn", authenticateUserController.handle);

export { router };
