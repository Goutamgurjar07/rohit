const express=require('express')
const cors=require('cors')
const app=express()

app.use(cors())
app.get('/',(req,res)=>{
     res.send("hello from goutam gurjar");
})


app.listen(8000,()=>{
     console.log('server is running on port 8000');
})

