import App from './server_config.js'
import db from './db/connect.js'

App.listen(App.get('port'),()=>{
    console.log('server running in port:', App.get('port'))
})