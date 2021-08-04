import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("donations")
class Donation {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  isAnonymousDonation: boolean;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  quantityCoin: number;

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

export { Donation };
