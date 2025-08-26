import { Router } from "express";
import { userController } from "./user.controller";

const router = Router()

 router.post('/sign-up', userController.signUp)
router.post('/sign-in', userController.signIn)
router.post('/refresh-token', userController.refreshToken)
// router.post('/rest-password')
 

export const userRouter=router