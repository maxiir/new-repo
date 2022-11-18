import modelDB from '../model/model.js'

const controller = {}

controller.newUser = async (req,res) => {
    const {name,lastname, address} = req.body;
    const savedata = await new modelDB({name:name,lastname:lastname,address:address})
    savedata.save()
}


export default controller;