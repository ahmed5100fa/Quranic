export type SurahName = Root2[]

export interface Root2 {
  index: number
  name: string
}

export interface TafseerAyah {
  tafseer_id: number
  tafseer_name: string
  ayah_url: string
  ayah_number: number
  text: string
}

export type TafseerName = Root2[]

export interface Root3 {
  id: number
  name: string
  language: string
  author: string
  book_name: string
}
