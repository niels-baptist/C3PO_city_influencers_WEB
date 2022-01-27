export interface UserPersonal {
  userId: number,
  location: {
    locationId: number,
    name: string,
    postal_code: string
  },
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  birthdate: string,
  userName: string;
}
