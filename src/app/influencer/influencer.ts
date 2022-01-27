import { User } from "../admin/user/user";
export interface Influencer {
  influencerId: number,
  user: {
    userId: number,
    location:{
      locationId: number,
      name: string,
      postalCode: string
    },
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    userName: string,
    birthdate: string
   },
  gender: string,
  domains: [
    {
      domainId: number,
      name: string,
      description: string
  },
  ]
}
