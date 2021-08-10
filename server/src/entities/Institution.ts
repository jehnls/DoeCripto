import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("institutions")
class Institution {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  site: string;

  @Column()
  wallet: string;

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

export { Institution };
