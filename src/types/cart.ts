export type CartItem = {
  id: number
  quantity: number
}

export interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
}

export const CartDefaultValues = {
  cart: [{ id: 0, quantity: 0 }],
  setCart: (cart: CartItem[]) => {},
  addToCart: (id: number, quantity: number) => {},
}
