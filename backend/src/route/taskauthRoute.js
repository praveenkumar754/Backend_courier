import express from 'express';
import { addtask} from '../controller/courier.js';



const taskauthRoute=express.Router();

taskauthRoute.post('/apiaddtask',addtask)
// taskauthRoute.get('/apigettask',gettask)
// taskauthRoute.put('/apiupdatetask',updatetask)
// taskauthRoute.post('/apideletetask',deletetask)


// taskauthRoute.get('/asd',as)
export default taskauthRoute;
