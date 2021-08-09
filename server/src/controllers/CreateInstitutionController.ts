import { CreateInstitutionService } from "@src/services/CreateInstitutionService";
import { Request, Response } from "express";

class CreateInstitutionController {
  async handle(req: Request, res: Response): Promise<any> {
    const createInstitutionService = new CreateInstitutionService();

    const institution = req.body;

    try {
      const institutionSaved = await createInstitutionService.execute(
        institution
      );
      return res.json(200).send(institution);
    } catch (err) {}
  }
}

export { CreateInstitutionController };
