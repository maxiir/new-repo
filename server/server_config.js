import express from 'express'
import { config } from 'dotenv'
import {join,dirname} from 'path'
import {fileURLToPath} from 'url'
import morgan from 'morgan'
import router from './router/routes.js'
import cors from 'cors'

config()

const App = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

App.use(express.json())
App.use(cors())
App.set('port',process.env.PORT || 3000)
App.use(morgan('dev'))
App.use(router)

if (process.env.STATE === 'production'){
    App.get('*', (req,res)=>{
        App.set(express.static(__dirname,'../client/dist'))
        const index = join(__dirname,'../client/dist/index.html')
        res.sendFile(index)     
    }) 
}else{
    App.get('/', (req,res)=>{
        res.send('server running...')
    })
}


export default App;