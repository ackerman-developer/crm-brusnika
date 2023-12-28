export type Admin = {
  password: string | null
}

export type LandForm = {
  formData:{
    registerNumber: number | null,
    address: string,
    square: string,
    aboutHolder: string,
    price: number | null,
    searchObject: string
  }
}
