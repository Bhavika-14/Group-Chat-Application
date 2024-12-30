const express = require('express')
const userRouter = express.Router()
import * as userController from "../controllers/userController"

userRouter.post("/signup",userController.signup)
userRouter.post("/login",userController.login)
userRouter.get("/session", userController.getCurrentLoggedInUser)

export default userRouter;