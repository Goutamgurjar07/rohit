const express=require('express')

const app=express()

app.get('/',(req,res)=>{
     res.send("hello from goutam gurjar");
})




app.listen(8000,()=>{
     console.log('server is running on port 8000');
})