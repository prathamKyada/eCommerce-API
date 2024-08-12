import express from "express";
import user_address_details from "../service/user_address_service"

const userAddressRoute = express.Router();

userAddressRoute.post('/user-address-registration', user_address_details.user_address_details)
userAddressRoute.get('/all-address', user_address_details.view_all_address)
userAddressRoute.get('/all-address-state-wise', user_address_details.view_address_by_state)
userAddressRoute.get('/all-address-city-wise', user_address_details.view_address_by_city)
userAddressRoute.get('/all-address-pincode-wise', user_address_details.view_address_by_pincode)


export default userAddressRoute;