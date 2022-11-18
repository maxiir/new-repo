import {Schema,model} from 'mongoose'

const modelDB = Schema({
    name:String,
    lastname:String,
    address:String
})

export default model('users', modelDB)