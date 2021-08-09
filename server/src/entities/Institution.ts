import { Column, Entity, PrimaryColumn } from "typeorm";
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

  @Column()
  created_at: Date;

  @Column()
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Institution };
