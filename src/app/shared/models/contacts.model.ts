export class Contact {
  constructor(
    public contacts_phone: string,
    public contacts_email: string,
    public contacts_address: string,
    public contacts_title: string,
    public contacts_description: string,
    public contacts_keywords: string,
    public id?: number
  ) { }
}
