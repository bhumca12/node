const express=require('express');
const app=express();

const {handleConnectMongoDB}=require('./config/connection');
const {router}=require('./routes/userRouter')

handleConnectMongoDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/api',router);

app.listen(5000,()=>{console.log('server is connected successfully')});