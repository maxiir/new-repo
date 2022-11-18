import { Formik } from "formik";
import { newUser } from "../../api/api.js";
import {useEffect,useState} from 'react'
import Table from '../components/Table.jsx'

const [users,setUsers] = useState([])



function Home() {
  return (
    <div className="conteiner-form">
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        address: "",
      }}
      onSubmit={async (values) => {
        await newUser(values);
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" onChange={handleChange} />
          <input type="text" name="lastname" onChange={handleChange} />
          <input type="text" name="address" onChange={handleChange} />
          <button type="submit">enviar</button>
        </form>
      )}


    </Formik>

    <Table/>
    </div>
  );
}

export default Home;
