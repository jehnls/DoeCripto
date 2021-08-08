import { IDonation } from "@interfaces/DonationInterface";
import { getCustomRepository, UsingJoinColumnIsNotAllowedError } from "typeorm";
import { DonationsRepository } from "@src/repositories/DonationsRepository";
import { Donation } from "@src/entities/Donation";
import { CreateQrCodePixService } from "./CreateQrCodePixService";

const createQrCodePixService = new CreateQrCodePixService();

class CreateDonationService {
  async execute(donationParam: IDonation): Promise<void> {
    const donationRepository = getCustomRepository(DonationsRepository);

    const {
      isAnonymousDonation,
      name,
      email,
      coinQuantity,
      currencyValue,
      totalValue,
      institutionId,
    } = donationParam;

    const personsKeyReceiveValue = "71cdf9ba-c695-4e3c-b010-abb521a3f1be";
    const createCharge = await createQrCodePixService.createCharge(
      totalValue,
      personsKeyReceiveValue
    );
    const createQrcode = await createQrCodePixService.generateQrCode(
      createCharge.data.loc.id
    );

    console.log("imagemQrcode", createQrcode);

    // try {
    //   const donation = donationRepository.create({
    //     isAnonymousDonation,
    //     name,
    //     email,
    //     quantityCoin: coinQuantity,
    //   });

    //   if (donation) {
    //     await donationRepository.save(donation);
    //     return donation;
    //   }
    // } catch (err) {
    //   return err;
    // }
  }
}

export { CreateDonationService };
