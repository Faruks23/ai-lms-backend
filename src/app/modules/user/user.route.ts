import { Router } from "express";
import { userController } from "./user.controller";

const router = Router()

 router.post('/sign-up', userController.signUp)
router.post('/sign-in',)
 

export const userRouter=router