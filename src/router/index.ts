import { Router } from "express";
import { userRouter } from "../app/modules/user/user.route";


const router = Router()


const moduleRoutes = [
    {
        path:'/user',
        route:userRouter
    }

]

moduleRoutes.forEach(route => router.use(route.path, route.route as any))






export default router