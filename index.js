require('dotenv').config()
const express = require('express')
const conectDB = require('./connectDb')
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())
conectDB()
app.get("/", (req, res) => {
    res.send("HEllloooo")
})

app.use('/api/user', require('./routes/userRoute'))

const start = async () => {
    app.listen(5000, () => {
        console.log("App is runnibng")
    })
}

start();

