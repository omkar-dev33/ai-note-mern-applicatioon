import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/config/db.js'
import notes from './src/routes/noteRoutes.js'

dotenv.config();
connectDB();

const app = express();

app.use(express.json())

app.use("/api/note",notes);

app.get("/", (req, res) => {
    res.send("API running...");
});

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})




