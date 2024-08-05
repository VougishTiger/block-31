const express= require('express');
const app= express();

app.get("/", (req, res, next)=> {
  res.send('<h1>Welcome</h1>');
});

const PORT= process.env.PORT || 5173;
app.listen(PORT, ()=> console.log('Listning to port'));