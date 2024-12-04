import mongoose from "mongoose";



const db=mongoose.createConnection("mongodb://localhost:27017/Courier_Service");
db.once('open',()=>console.log("db successfully connnneted") );
db.on('error',(err)=>console.log(`db not connect ${err.message}`));

export default db;