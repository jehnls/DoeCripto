import { CreateInstitutionService } from "@src/services/InstitutionService";
import { Request, Response } from "express";

class CreateInstitutionController {
  async handle(req: Request, res: Response): Promise<any> {
    const createInstitutionService = new CreateInstitutionService();

    const institution = req.body;

    try {
      const institutionSaved = await createInstitutionService.execute(
        institution
      );
      return res.json(200).send(institutionSaved);
    } catch (err) {}
  }
}

export { CreateInstitutionController };
