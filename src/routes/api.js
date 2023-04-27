const express = require('express')
import limiter from '../middlewares/limiter';
import controller from '../controllers/api'
const router = express.Router();


router.get('/', limiter.userLimiter, controller.apitesting)