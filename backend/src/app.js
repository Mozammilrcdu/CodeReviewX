const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Backend of CodeReviewX is successfully running')
})

app.use('/ai', aiRoutes)

module.exports = app