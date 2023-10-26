export type productsType = {
  id: number
  name: string
  description: string
  image: string
  stock: number
  price: number
  id_category?: number
  id_lookbook?: number
  id_rating?: number
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}

export type generalType = {
  id: number
  name: string
}
