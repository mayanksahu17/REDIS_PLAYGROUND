const express = require("express")
const axios = require("axios").default
const client = require("./client")

const app = express()
const PORT = 8000

app.use(express.json())

app.get("/",async(req,res)=>{
    const cacheValue = await client.get("todos")
    if (cacheValue) {
        return res.json(JSON.parse(cacheValue))
    }
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
       await client.set("todos",JSON.stringify(data))
       await client.expire("todos",30)
        return res.json(data)
        // return res.json({message : "hey"})
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})