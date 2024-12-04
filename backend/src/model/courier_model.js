import mongoose from 'mongoose';
import db from '../config/db/db.js';

const addtaskSchema = new mongoose.Schema({
   
    Name:String,
    Email:String,
    TrackingID:String,
    Message:String,
  },{timestamps:true}
  );
  
  const Addform =db.model('addtasks', addtaskSchema);
  export default Addform