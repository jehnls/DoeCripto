export interface IDonation {
  id?: string;
  addresseePix: string;
  anonymousDonation: boolean;
  name?: string;
  email?: string;
  coinQuantity: number;
  institutionId: string;
  proofFile?: ImageBitmap;
}
