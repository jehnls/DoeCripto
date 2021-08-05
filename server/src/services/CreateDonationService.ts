import { IDonation } from "@interfaces/DonationInterface";
import { getCustomRepository } from "typeorm";
import { DonationsRepository } from "@src/repositories/DonationsRepository";
import { Donation } from "@src/entities/Donation";

class CreateDonationService {
  async execute(donationParam: IDonation): Promise<Donation> {
    const donationRepository = getCustomRepository(DonationsRepository);

    const { isAnonymousDonation, name, email, coinQuantity } = donationParam;
    try {
      const donation = donationRepository.create({
        isAnonymousDonation,
        name,
        email,
        quantityCoin: coinQuantity,
      });

      if (donation) {
        await donationRepository.save(donation);
        return donation;
      }
    } catch (err) {
      return err;
    }
  }
}

export { CreateDonationService };
