import { InstitutionService } from "@src/services/InstitutionService";
import { Request, Response } from "express";

class InstitutionController {
  async create(req: Request, res: Response): Promise<any> {
    const institutionService = new InstitutionService();

    const institution = req.body;

    try {
      const institutionSaved = await institutionService.create(institution);
      res.status(200).json(institutionSaved);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}

export { InstitutionController };
