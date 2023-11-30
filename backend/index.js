import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express();
app.use(express.json());


const port = process.env.PORT || 8000;
app.get('*', (req, res) =>{
    res.send("Got Request!")
})

app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
})