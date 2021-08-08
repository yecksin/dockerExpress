const express = require('express');
const app = express();
const port = 3000;


app.get('/',(req,res)=>{
    res.json({saludo:'Hola yeck'})
})

app.listen(port,(req,res)=>{
    console.log(`Listen in port ${port}`)
})