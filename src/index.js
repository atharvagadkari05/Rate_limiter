import express from 'express'
import routes from './routes/api.js'
// import {config} from './config/config.js'
const app = express();
const router = express.Router()
app.listen(4001, ()=>{
    console.log(`Listening at 4001`)
})

app.use('/api', routes)

