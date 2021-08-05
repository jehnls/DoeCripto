import { Request, Response } from "express";
import { IDonation } from "@src/interfaces/DonationInterface";
import { CreateDonationService } from "@src/services/CreateDonationService";

const createDonationService = new CreateDonationService();
class CreateDonationController {
  async handle(req: Request, res: Response): Promise<void> {
    const objDonationRequest = req.body;

    try {
      const donation: IDonation = { ...objDonationRequest };
      const donationSave = await createDonationService.execute(donation);
      res.status(200).send(donationSave);
    } catch (error) {
      console.log("error", error);
      res.status(400).json({ Error: error });
    }
  }
}

export { CreateDonationController };
