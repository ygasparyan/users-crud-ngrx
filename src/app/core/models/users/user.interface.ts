import { UserAddress } from '@models';

export interface User {
  _id: string;
  address: UserAddress;
  phones: string[];
  name: string;
  email: string;
}
