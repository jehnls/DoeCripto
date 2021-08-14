import { Request, Response } from "express";
import { AppError } from "@src/errors/AppError";
import { CategoryService } from "@src/services/CategoryService";

const categoryService = new CategoryService();

class CategoryController {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      throw new AppError("O campo categoria esta vazio");
    }

    const category = await categoryService.create(name);

    res.status(200).json({ category });
  }
}

export { CategoryController };
