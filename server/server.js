
import express from 'express'

const PORT = 5000

app.get("/", (req, res) => {
    res.send("API running...");
});

app.listen("/", (req, res) => {
    console.log(`Server runnin on port ${PORT}`);
})







