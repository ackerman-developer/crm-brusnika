import { EntityData, EntityDataId } from "./entityData"
import { LandData, LandsDataId } from "./landData"

export type LandFormData = {
  registerNumber: number | null,
  address: string,
  areaInMeters: string,
  aboutHolder: string,
  price: number | null,
  whoIsFound: string
}

export interface SideBarProps{
  isOpen: boolean
  toggleSidebar: () => void
}

export type LandState = {
  lands: LandsDataId[]
  landId: LandsDataId[]
  uploadLand: LandData[]
  isLandsDataLoading: boolean
}

export type EntityState = {
  uploadEnity: EntityData[]
  entities: EntityDataId[]
  isEntitiesDataLoading: boolean
}

