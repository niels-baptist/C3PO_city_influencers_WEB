export interface Campaign {
  campaignId: number,
  employee: {
    employeeId: number,
    employee_role: {
      roleId: number,
      name: string
    },
    user: {
      userId: number,
      location: {
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
    }
  },
  location: {
    locationId: number,
    name: string,
    postalCode: string
  },
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
  domains: [
    {
      domainId: number,
      name: string,
      description: string
    }
  ],
  platforms: [
    {
      social_media_platformId: number,
      name: string,
      url: string
    }
  ]
}
