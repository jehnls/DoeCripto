import { IDonation } from "@interfaces/DonationInterface";
import { getCustomRepository } from "typeorm";
import { DonationsRepository } from "@src/repositories/DonationsRepository";
import { CreateQrCodePixService } from "./QrCodePixService";
import { InstitutionRepository } from "@src/repositories/InstitutionRepository";

const createQrCodePixService = new CreateQrCodePixService();

class CreateDonationService {
  async execute(donationParam: IDonation): Promise<any> {
    const donationRepository = getCustomRepository(DonationsRepository);
    const institutionRepository = getCustomRepository(InstitutionRepository);

    const {
      isAnonymousDonation,
      name,
      email,
      quantityCoin,
      currencyValue,
      totalValue,
      //institutionId,
    } = donationParam;

    const personsKeyReceiveValue = "71cdf9ba-c695-4e3c-b010-abb521a3f1be";
    const institutionId = "f90c5875-2e6c-4023-be51-d9ba5f4be4a5";

    const institution = await institutionRepository.findOne(institutionId);

    const createCharge = await createQrCodePixService.createCharge(
      totalValue,
      personsKeyReceiveValue
    );

    const createQrcode = await createQrCodePixService.generateQrCode(
      createCharge.data.loc.id
    );

    try {
      const donation = donationRepository.create({
        isAnonymousDonation,
        name,
        email,
        quantityCoin: 2,
        institutionId: institution,
      });

      if (donation) {
        await donationRepository.save(donation);
        let donationWithQrcode = { donation, createQrcode };
        return donationWithQrcode;
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export { CreateDonationService };
