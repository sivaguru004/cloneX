import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MOGNODB)
        console.log("DataBase Connected Successfully!")
    } catch (error) {
        console.log(`DataBase Connection Error: ${error}`)
        process.exit(1)
    }
}

export default connectDB;