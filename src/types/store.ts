export type Admin = {
  password: string | null
}

export type LandForm = {
  formData:{
    registerNumber: number | null,
    address: string,
    areaInMeters: string,
    aboutHolder: string,
    price: string,
    whoIsFound: string
  }
}
