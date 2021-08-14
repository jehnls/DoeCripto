import { CategoryRepository } from "@src/repositories/CategoryRepository";
import { getCustomRepository } from "typeorm";

class CategoryService {
  async create(categoryParam: string) {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.create({
      name: categoryParam,
    });

    await categoryRepository.save(category);

    return category;
  }
}

export { CategoryService };
