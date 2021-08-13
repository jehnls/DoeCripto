import { Column, CreateDateColumn, Entity } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
class Category {
  @Column()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Category };
