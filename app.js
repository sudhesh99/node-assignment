const express = require('express');
const app = express();
const PORT = 3030;

app.get('/', async(req,res)=>{
    try{
        res.send("HELLO WORLD");
        res.end();
    } catch(err){
        console.log("ERROR IN GET REQUEST", err)
    }
})

function myMessage(message){
    console.log("My message is " + message);
}

let newPromise = new Promise(function(res,rej){
    let someValue = 0;

    if(someValue == 0){
        res("Hello Sudhesh")
    }else{
        rej("err")
    }
})

newPromise.then(
    function(value){
        myMessage(value)
    }
)


app.listen(PORT, function(){
    console.log("Connected to PORT " + PORT)
})