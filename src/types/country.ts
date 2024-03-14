import { Regions } from './regions'

type Currency = {
  code: string
  name: string
  symbol: string
}

type Language = {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

export type Country = {
  name: string
  nativeName: string
  flag: string
  flags: {
    png: string
    svg: string
    alt: string
  }
  region: Regions
  subregion: string
  capital: string
  population: number
  borders: string[]
  currencies: Currency[]
  languages: Language[]
}
