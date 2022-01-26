import { User } from "../admin/user/user";
export interface Influencer {
  influencerId: number,
  user: {
    [key: string]: User
  },
  gender: string,
  domains: [
  ]
}
