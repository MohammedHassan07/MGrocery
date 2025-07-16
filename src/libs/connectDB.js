import mongoose from "mongoose";

let cached = global.mongoose
const MONGODB_URI = process.env.MONGODB_URI

if (!cached) {

    console.log('cached db instance')

    cached = global.mongoose = { conn: null, promise: null }
}

export default async function connectDb() {


    try {

        if (cached.conn) return cached.conn

        if (!cached.promise) {
            cached.promise = await mongoose.connect(MONGODB_URI)
        }

        console.log('db connected')

        cached.conn = await cached.promise

        return cached.conn


    } catch (error) {
        console.log(error)
    }
}