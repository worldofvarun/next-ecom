import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import xssClean from 'xss-clean';
import hpp from 'hpp';

dotenv.config()
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(helmet());
app.use(hpp({}));
app.use(xssClean());
app.use(mongoSanitize());
app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));

app.all('/health', async (req, res) => {
    return res.send({message: 'OK!'});
})

app.listen(port, () => {
    console.log(`Server started at ${port}`);
})