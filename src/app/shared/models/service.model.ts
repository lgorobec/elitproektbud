export class Service {
  constructor(
    public img: string,
    public video: string,
    public icon: string,
    public created_at: string,
    public updated_at: string,
    public language_services: ServiceLang[],
    public id?: number
  ) { }
}

class ServiceLang {
  constructor(
      public service_id: number,
      public name: string,
      public text: string,
      public description: string,
      public keywords: string,
      public alt: string,
      public language_id: number,
      public code: string,
      public enable: number,
      public id?: number
  ) {}
}