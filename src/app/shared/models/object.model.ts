export class Object {
  constructor(
    public main_img: string,
    public name: string,
    public images = [],
    public ceo_title: string,
    public ceo_keys: string,
    public ceo_desc: string,
    public ceo_alt_main: string,
    public id?: number
  ) { }
}
