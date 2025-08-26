import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';
import router from './router';



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

app.use(notFound)

// global error handler
app.use(globalErrorHandler)

export default app
