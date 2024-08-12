import express from 'express'
import user_registration from '../service/login_reister_service'
import all_middleware from '../../../Common/MiddleWare/registration_middleware'
const userRegisterRoute = express.Router()

userRegisterRoute.post('/user-register', all_middleware.validateUserRegistration ,user_registration.add_user_register)

userRegisterRoute.post('/user-login', user_registration.login_user)

export default userRegisterRoute;