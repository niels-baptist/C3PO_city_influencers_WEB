export interface UserPersonal {
  userId: number,
  location: {
    locationId: number,
    name: string,
    postal_code: string
  },
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  birthdate: string,
  userName: string;
}
