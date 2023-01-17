const express = require('express');
const app = express();
const PORT = 3030;
const fs = require('fs')

app.get('/', async(req,res)=>{
    try{
        res.send("HELLO WORLD");
        res.end();
    } catch(err){
        console.log("ERROR IN GET REQUEST", err)
    }
})


//promise to display message
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

//create file using fs module

async function createMyFile(){
    try{
        return await fs.writeFile('myFile.txt', "Writting Something", function(err){
            if(err) throw err;
            console.log("File Created");
        })
    }catch(err){
        console.log("Error", err)
    }
}

createMyFile()

app.listen(PORT, function(){
    console.log("Connected to PORT " + PORT)
})