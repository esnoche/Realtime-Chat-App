import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import authRoutes from "./routes/AuthRoute.js"



dotenv.config();

const app = express();
const port = process.env.PORT || 7661;
const databaseURL = process.env.DATABASE_URL;

app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}))

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes)

mongoose
.connect(databaseURL)
.then(() => console.log("DB connected"))
.catch(err=>console.log(err.message));

const server = app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});