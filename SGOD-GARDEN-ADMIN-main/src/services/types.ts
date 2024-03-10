export type ParamLogin = {
  username: string
  password: string
}

export type LoginResponse = {
  access_token: string
}

type Owner = {
  _id: string
  username: string
}

type Price = {
  size: string
  original_price: number
  new_price: number
  _id: string
  createdAt: Date
  updatedAt: Date
}
export type Product = {
  _id: string
  name: string
  images: string[]
  price_original: number
  price_new: number
  prices: Price[]
  reviews: string[]
  owner: Owner
  isPublished: boolean
  quantityInStock: number
  quantity: number
  category: string
  createdAt: Date
  updatedAt: Date
}

export type Countdown = {
  _id: string
  title: string
  time_countdown: string
  image: string
  is_show: boolean
  createdAt: string
  updatedAt: string
}

export type Account = {
  _id: string
  username: string
  slug: string
  password: string
  email: string
  role: string
  avatar: string
  product: any[]
  orders: any[]
  feedbacks: any[]
  score: number
  isBlocked: boolean
  createdAt: string
  updatedAt: string
  refreshToken: string
}
