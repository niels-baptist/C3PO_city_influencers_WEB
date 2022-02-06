import { Domain } from './../domain/domain';
import { SocialMediaPlatform } from './../social-media-platform/social-media-platform';
import { Employee } from './../employee/employee';
import { User } from './../admin/user/user';
import { Location } from './../location/location';
export interface Campaign {
  campaignId: number,
  employee: Employee,
  user: User,
  location: Location,
  domain: Domain,
  socialMediaPlatform: SocialMediaPlatform,
  campaignStatus: {
    statusId: number,
    name: string
  },
  submissions: [
  {
      submissionId: number,
      url: string,
      description: string,
      submissionStatus: {
        statusId: number,
        name: string
      }
    }
  ],
  name: string,
  description: string,
  fotoUrl: string,
  startDate:	string,
  endDate:	string,
}
