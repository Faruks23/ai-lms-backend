import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';


const app: Application = express()

// parser

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [
        'http://localhost:3000'
        
    ],
    credentials: true
}))

// routes
app.use('/api/v1', router)

// global error handler
app.use(globalErrorHandler)
