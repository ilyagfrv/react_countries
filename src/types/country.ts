import { Regions } from './regions'

export type Country = {
  id: number
  name: string
  nativeName: string
  population: number
  region: Regions
  subregion: string
  capital: string
  currency: string
  flag: string
  languages: string[]
  borders: string[]
}

export type SimplifiedCountry = {
  id: number
  name: string
}
