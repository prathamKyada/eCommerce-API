import express from 'express'
import cart from '../service/cart_service'

const cart_route = express.Router()

cart_route.post('/add-to-cart', cart.add_to_cart);

cart_route.patch('/add-product-to-cart', cart.add_product_in_cart)

cart_route.delete('/delete-product-from-cart', cart.delete_prorduct_in_cart)

export default cart_route