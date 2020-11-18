export class Registration {
  constructor(
    public firstName: string,
    public lastName: string,
    public phoneNumber: string,
    public email: string,
    public eventAttending: boolean[],
    public preorderDvd: boolean,
    public guestFirstName?: string,
    public guestLastName?: string,
    public comments?: string
  ) {}
}