const express = require('express');

const app = express();
const jsonData = require('./data');

app.get('/data',(req,res)=>{
    res.json(jsonData);
});

app.get('/',(req,res)=>{
  res.send('this is an express server');
});


app.listen(3001, () =>{
 console.log('server running');
});