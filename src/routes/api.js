import express from 'express'
import limiter from '../middlewares/limiter.js';
import controller from '../controllers/api.js'
const router = express.Router();


router.get('/', limiter.userLimiter,  controller.apitesting)

export default router