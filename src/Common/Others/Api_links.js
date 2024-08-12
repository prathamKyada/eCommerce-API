//#region Admin
add_company = "http://localhost:3300/admin/add-company" ( METHOD = POST )
add_product_category = "http://localhost:3300/admin/add-product-category" ( METHOD = POST )
add_product_sub_category = "http://localhost:3300/admin/add-product-sub-category" ( METHOD = POST )
add_product_details = "http://localhost:3300/admin/add-product-details" ( METHOD = POST )
//#endregion


//#region User 
all_product = "http://localhost:3300/user/all-product" ( METHOD = GET )
get_company_wise_product = "http://localhost:3300/user/all_category-wise-product" ( METHOD = GET )
get_product_category_wise_product = "http://localhost:3300/user/all_sub_category-wise-product" ( METHOD = GET )
get_product_sub_category_wise_product = "http://localhost:3300/user/all_sub_category-wise-product" ( METHOD = GET )
//#endregion

//#region User Address 
user_registration = "http://localhost:3300/user-address/user-address-registration" ( METHOD = POST )
view_all_address = "http://localhost:3300/user-address/all-address" ( METHOD = GET )
view_address_by_state = "http://localhost:3300/user-address/all-address-state-wise" ( METHOD = GET )
view_address_by_city = "http://localhost:3300/user-address/all-address-city-wise" ( METHOD = GET )
view_address_by_pincode = "http://localhost:3300/user-addressview_address_by_pincode" ( METHOD = GET )
//#endregion

//#region User Registration
add_user_registration = "http://localhost:3300/auth/user-register" ( METHOD = POST )
login_user = "http://localhost:3300/auth/user-login" ( METHOD = POST )
//#endregion

//#region Cart
add_to_cart = "http://localhost:3300/cart/add-to-cart" ( METHOD = POST )
add_product_in_cart = "http://localhost:3300/cart/add-product-to-cart" ( METHOD = PATCH )
delete_prorduct_in_cart = "http://localhost:3300/cart/delete-product-from-cart" ( METHOD = DELETE )
//#endregion