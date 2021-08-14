import { AppError } from "@src/errors/AppError";
import { IInstitution } from "@src/interfaces/InstitutionInterface";
import { CategoryRepository } from "@src/repositories/CategoryRepository";
import { InstitutionRepository } from "@src/repositories/InstitutionRepository";
import { getCustomRepository } from "typeorm";

class InstitutionService {
  async create(institutionParam: IInstitution) {
    const institutionRepository = getCustomRepository(InstitutionRepository);
    const categoryRepository = getCustomRepository(CategoryRepository);

    const { name, cnpj, site, wallet, category } = institutionParam;

    const findCategory = await categoryRepository.find({
      where: { name: category },
    });

    // if (!foundCategory) {
    //   throw new AppError(
    //     "Categoria não existe ou não foi encontra na base de dados"
    //   );
    // }

    const institution = institutionRepository.create({
      name,
      cnpj,
      site,
      wallet,
    });

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

export { InstitutionService };
