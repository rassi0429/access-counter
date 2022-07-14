import express from "express"
import fs from "fs/promises"

const app = new express()
app.listen(4001,() => console.log("Ok"))

app.get("/",async (req,res) => {
    const data = JSON.parse(await fs.readFile("./data/access.json"))
    data.count = data.count + 1
    await fs.writeFile("./data/access.json",JSON.stringify(data))
    res.send((data.count + 1).toString())
})