import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Donation } from "@entities/Donation";

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

  @JoinColumn({ name: "donationId" })
  @OneToMany(() => Donation, (donation) => donation.institutionId)
  donationId: Donation[];

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
