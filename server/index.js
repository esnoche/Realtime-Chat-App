import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import authRoutes from "./routes/AuthRoute.js"
import path from 'path';
import { fileURLToPath } from "url";
import contactRoutes from "./routes/ContactRoutes.js"
import setupSocket from "./socket.js"


dotenv.config();

const app = express();
const port = process.env.PORT || 7661;
const databaseURL = process.env.DATABASE_URL;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}))

app.use("/uploads/profiles", express.static(path.join(__dirname, 'uploads', 'profiles')));


app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/contacts', contactRoutes);

mongoose
.connect(databaseURL)
.then(() => console.log("DB connected"))
.catch(err=>console.log(err.message));

const server = app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});

setupSocket(server);