import express from 'express';
import taskauthRoute from './taskauthRoute.js';

// import couierRoute from './couierRoute.js';


const router=express.Router()

router.use('/authtask',taskauthRoute)



export default router;
