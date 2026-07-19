import mongoose from 'mongoose'
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongodb connected : ${connect.connection.host}`);
    } catch (error) {
        console.log(`Server is not connected`, error.message);
        process.exit(1);
    }
}

export default connectDB;


