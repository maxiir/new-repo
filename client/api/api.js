import axios from 'axios'

export const newUser = async (values)=>
    await axios.post('http://localhost:5000/api/newuser', values);