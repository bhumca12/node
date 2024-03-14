const mongoose=require('mongoose');
async function handleConnectMongoDB(){
    return mongoose.connect("mongodb://localhost:27017/movieTicket",{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>console.log('database connected successfully')).catch(err=>{
        console.log(`database is not connect.please check database name ${err}`);
    })
}
module.exports={handleConnectMongoDB}