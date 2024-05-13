const client = require("./client")

async function init(){
        await client.lpush("messages",1)
        await client.lpush("messages",2)
        await client.lpush("messages",3)
        const messages = await client.rpop("messages")
        console.log(messages)
}
init()