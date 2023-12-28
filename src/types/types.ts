export type LandFormData = {
  registerNumber: number | null,
  address: string,
  square: string,
  aboutHolder: string,
  price: number | null,
  searchObject: string
}

export interface SideBarProps{
  isOpen: boolean
  toggleSidebar: () => void
}


