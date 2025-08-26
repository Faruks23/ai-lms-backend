import { Router } from "express";


const router = Router()

const userRoute = () => {
    return 'hello'
}

const moduleRoutes = [
    {
        path: '/',
        route:userRoute
    }

]

moduleRoutes.forEach(route => router.use(route.path, route.route as any))






export default router