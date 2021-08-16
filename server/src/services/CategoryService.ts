import { Category } from "@src/entities/Category";
import { CategoryRepository } from "@src/repositories/CategoryRepository";
import { router } from "@src/routes";
import { getCustomRepository } from "typeorm";

class CategoryService {
  async create(name: string): Promise<object> {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const categoryAlreadyExist = categoryRepository.findOne({ name: name });

    if (categoryAlreadyExist) {
      return { message: "category already exists" };
    }

    const category = categoryRepository.create({ name: name });

    await categoryRepository.save(category);

    return category;
  }
}

export { CategoryService };
