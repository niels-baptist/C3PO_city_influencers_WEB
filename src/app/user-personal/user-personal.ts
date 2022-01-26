export interface UserPersonal {
  userId: number;
  location: {
    [key: number]: Location
  },
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  birthdate: string;
  userName: string;
}
