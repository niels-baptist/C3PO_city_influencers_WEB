import {User} from './user';

export interface UserResponse {
  accessToken: string;
  user: User;
}
