export class Contact {
  constructor(
    public adress: string,
    public phone: string,
    public email: string,
    public ceo_title: string,
    public ceo_keys: string,
    public ceo_desc: string,
    public id?: number
  ) { }
}
