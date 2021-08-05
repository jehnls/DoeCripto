export interface IDonation {
  id?: string;
  institutionId: string;
  isAnonymousDonation: boolean;
  name?: string;
  email?: string;
  coinQuantity: number;
  currencyValue: number;
  totalValue: number;
  addresseePix: string;
}
