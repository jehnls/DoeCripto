export interface IDonation {
  id?: string;
  addresseePix: string;
  isAnonymousDonation: boolean;
  name?: string;
  email?: string;
  coinQuantity: number;
  institutionId: string;
  proofFile?: ImageBitmap;
}
