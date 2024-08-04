export interface Users {
  page:number,
  per_page:number,
  total:number,
  total_pages:number,
  data:
    {
      id:Number,
      email:string,
      first_name: string,
      last_name: string,
      avatar: string
    }[]
  support: {
    url:string,
    text:string,
  }
}

export interface User {
  data: {
    id:Number,
    email:string,
    first_name: string,
    last_name: string,
    avatar:string,
  },
  support: {
      url:string,
      text:string,
  }
}

export interface Userinfo {
    id:Number,
    email:string,
    first_name: string,
    last_name: string,
    avatar:string,
}
