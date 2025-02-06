const express =require("express");
const dotenv =require("dotenv");







const app=express();

app.get('/',(req,res)=>{

    
    res.end("short-url id")
    
})

dotenv.config();


const Port=process.env.Port;






app.listen(Port , ()=>{
    console.log(`server is initated ${Port}`);
})