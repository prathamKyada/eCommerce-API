export const MESSAGES_SUCCESS = {
    MESSAGE_1: "Data Stored successfully",
    MESSAGE_2: "Cart Details Updated",
    MESSAGE_3: "Cart details deleted Successfully"
}

export const MESSAGES_FAILURE = {
    MESSAGE_1: "No Null Value.",
    MESSAGE_2: "No Data Stored",
    MESSAGE_3: "Invalid Data",
    MESSAGE_4: "User Not Found",
    MESSAGE_5: "Login Failed",
    MESSAGE_6: "Internal Server Error",
    MESSAGE_7: "Passwords Don't Match",
    MESSAGE_8: "Email Already Exists",
    MESSAGE_9: "UserName is Al",
    MESSAGE_10: "Internal Server Error",
    MESSAGE_11: "Company Name Not Found",
    MESSAGE_12: "Fail to Data in Database",
    MESSAGE_13: "Fail to add Product in Cart"
}

export const SUCCESS_STATUS_CODE = {
    S_ST200: 200,
    S_ST201: 201, // Invalid Data (Email ID, Password, userName)
    S_ST203: 203, // User not found
    S_ST204: 204,
    S_ST205: 205,
    S_ST206: 206, // add_to cart fail 
    S_ST207: 207, // cart detials updated successfully
    S_ST208: 208, // Cart details are Deleted

}

export const FAIL_STATUS_CODE = {
    F_ST400: 400,  // lOGIN API FAIL
    F_ST401: 401,  // REGISTRATION API FAIL
    F_ST205: 205,  // Password Doesn't Match
    F_ST206: 206,  // Email already exists
    F_ST207: 207,  // Username already exists
    F_ST208: 208,  // Company Name is empty
    F_ST209: 209,  // Fail to add data
    F_ST402: 402,  // Internal Server Error
}