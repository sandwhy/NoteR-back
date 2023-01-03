import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"



const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get("/", (req,res) => {
    res.send("app is running")
})

app.listen(5000, () => console.log("ready to go"))
// .catch((error) => console.log(error))