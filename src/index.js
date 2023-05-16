import express from 'express';

const app = express();


app.use(express.json());

app.get('/',(request,response)=>{
    return response.json("Ok")
})

app.listen(5555, ()=>{
    console.log("Rodando");
})