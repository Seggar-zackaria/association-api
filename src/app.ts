import './constants'
import express from 'express';
import type { Express } from 'express';
import rateLimit from 'express-rate-limit';
import { errorHandler } from "./middleware/errorHnadler";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

const app: Express = express();

app.use(express.json());


const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,

    max: 10,

    standardHeaders: true,
    legacyHeaders: false,

    message: { error: 'Too many login attempts from this IP, please try again after 15 minutes' },
});



app.use('/api/auth', authLimiter);


app.use(express.static('public'));

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;

