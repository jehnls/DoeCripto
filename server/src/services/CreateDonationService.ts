import { IDonation } from "@interfaces/DonationInterface";
import { getCustomRepository } from "typeorm";
import { DonationsRepository } from "@src/repositories/DonationsRepository";
import { Donation } from "@src/entities/Donation";

class CreateDonationService {
  async execute(donationParam: IDonation): Promise<Donation> {
    const donationRepository = getCustomRepository(DonationsRepository);

    const donation = donationRepository.create(donationParam);

    if (donation) {
      await donationRepository.save(donation);

      return donation;
    }
  }
}

export { CreateDonationService };
