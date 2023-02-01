import express from 'express'
import { config } from 'dotenv'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import router from './router/routes.js'
import cors from 'cors'

config()

const App = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

App.use(express.json())
App.use(cors())
App.set('port', process.env.PORT || 3000)
App.use(morgan('dev'))
App.use(router)

if (process.env.STATE === 'production') {
  App.use(express.static(join(__dirname, '../client/dist')))

  App.get('*', (req, res) => {
    const index = join(__dirname, '../client/dist/index.html')
    res.sendFile(index, (error) => {
      if (error) {
        res.status(500).json({ error: 'Error al enviar el archivo' })
      }
    })
  })
} else {
  App.get('/', (req, res) => {
    res.send('server running...')
  })
}

App.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

export default App
