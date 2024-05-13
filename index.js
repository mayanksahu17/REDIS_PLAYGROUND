
import client from './client'

async function init(){

    const result = await client.get("user:1")
    console.log("result --> ",result);
    const res1 = await client.set("message:1", "hey");
    const res2 = await client.set("message:2", "hii");
    const res3 = await client.set("message:3", "how are you");
    const res5 = await client.set("message:5", "fine");
    console.log(res5);

    const message = await client.get("message:1")
    console.log("result --> ",message);
}

init()

// process.exit(1)