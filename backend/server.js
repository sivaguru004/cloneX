import express from "express"
import Denv from "dotenv"
import authRoute from "./routes/auth.routes.js"
import connectDB from "./DB/connections.js"

Denv.config();
const app = express();
const PORT = process.env.PORT;

app.use('/api/auth', authRoute);


app.listen(PORT, ()=>{
    console.log(`Server run in localhost:${PORT}`)
    connectDB();
})