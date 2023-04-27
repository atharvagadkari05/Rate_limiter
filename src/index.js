const express = require('express')
const app = express();
const {config} = require('./config/config')
const router = express.Router()
import routes from './routes/api'
app.listen(config.server.port, ()=>{
    console.log(`Listening at ${config.server.port}`)
})

router.use('/api', routes)

