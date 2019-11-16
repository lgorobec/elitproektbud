export class Service {
  constructor(
    public img: string,
    public video: string,
    public icon: string,
    public created_at: string,
    public name: string,
    public text: string,
    public description: string,
    public keywords: string,
    public alt: string,
    public code: string,
    public title: string,
    public id?: number
  ) { }
}