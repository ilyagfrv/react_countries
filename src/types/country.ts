import { Regions } from './regions'

export type Country = {
  id: number
  name: string
  nativeName: string
  population: number
  flag: string
  region: Regions
  subregion: string
  capital: string
  currency: string
  languages: string[]
  borders: string[]
}
