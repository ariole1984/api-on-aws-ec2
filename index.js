import express from "express"
import cors from 'cors' 

const app = express
app,use(cors())
app.use(express.json())

const PORT = 4000

app.length('/', (req, res) => res.send('my api'))

app.listen(PPRT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
