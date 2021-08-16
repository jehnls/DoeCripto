import { Request, Response } from "express";
import { CategoryService } from "@services/CategoryService";

class CategoryController {
  async create(req: Request, res: Response): Promise<void> {
    const categoryService = new CategoryService();
    const { name } = req.body;

    const categoty = await categoryService.create(name.toUpperCase());

    res.status(200).json(categoty);
  }
}

export { CategoryController };
