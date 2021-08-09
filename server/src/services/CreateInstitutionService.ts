import { IInstitution } from "@src/interfaces/InstitutionInterface";
import { InstitutionRepository } from "@src/repositories/InstitutionRepository";
import { getCustomRepository } from "typeorm";

class CreateInstitutionService {
  async execute(institutionParam: IInstitution) {
    const institutionRepository = getCustomRepository(InstitutionRepository);

    const institution = institutionRepository.create(institutionParam);

    console.log(institution);

    try {
      if (institution) {
        await institutionRepository.save(institution);
        return institution;
      }
    } catch (err) {
      return err;
    }
  }
}

export { CreateInstitutionService };
