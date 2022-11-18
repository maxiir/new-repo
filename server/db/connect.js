import {connect} from 'mongoose'

const db = await connect(process.env.MONGO_URI)
console.log(db.connection.name)



export default db