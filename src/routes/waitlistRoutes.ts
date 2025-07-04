// waitlistRoutes.ts
import express from 'express';
import { addToWaitlist } from '../controller/waitlistController'; 

const router = express.Router();
console.log("wailtlist routes");
router.post('/waitlist', addToWaitlist); 

export default router;