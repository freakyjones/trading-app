// core modules

// third-party modules
const express=require('express')


const app=express();
// app middleware here

// all routes here

// admin routes

app.get('/',(req,res,next)=>{
    res.send('working')
})
// error url
app.use((req,res,next)=>{
  res.send('<h1>404 NOT Found</h1>')
})

const PORT=3000
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
