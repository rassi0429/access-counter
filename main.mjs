import express from "express"
import fs from "fs/promises"

const app = new express()
app.listen(4001,() => console.log("Ok"))

const data = JSON.parse(await fs.readFile("./data/access.json"))

app.get("/",async (req,res) => {
    data.count = data.count + 1
    res.send((data.count + 1).toString())
})

setTimeout(async () => {
    await fs.writeFile("./data/access.json",JSON.stringify(data))
}, 60000)