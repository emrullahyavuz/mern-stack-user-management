import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';
import cors from 'cors';

const app = express();
const PORT = 5000;


app.use(bodyParser.json())
app.use(cors())


app.use("/users", usersRouter)



app.use("*",(req,res) => {
    res.status(404).send("Sayfa Bulunamadı!")
})



app.listen(PORT,() => {
    console.log("node.js çalıştı")
})