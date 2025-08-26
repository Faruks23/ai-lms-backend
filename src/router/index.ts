import { Router } from "express";


const router = Router()

const moduleRoutes = [
    {
        path: '/',
        route: ""
    }
    
]

moduleRoutes.forEach(route => router.use(route.path, route.route as any))






export default router