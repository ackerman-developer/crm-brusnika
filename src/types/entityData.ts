import { LandsDataId } from "./landData"

export type EntityData = {
  landId?: string,
  juridicalCost: number | null,
  permissiveSide: string,
  geotechnicalConditions: string,
  availabilityEngineeringNetworks: string,
  transportationaAccessibility: string
}

export type EntityDataId = {
  id: string
  juridicalCost: number | null,
  permissiveSide: string,
  geotechnicalConditions: string,
  availabilityEngineeringNetworks: string,
  transportationaAccessibility: string,
  landId?: string,
  land: LandsDataId
}

