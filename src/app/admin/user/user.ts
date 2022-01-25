import { Location } from "../../location/location";

export interface User {
  userId: number,
  location: {
    [key: string]: Location
  },
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  username: string,
  birthdate: string;
}
