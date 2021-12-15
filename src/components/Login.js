import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const initatate =   {  
        username: '',
        password: '',
        role: ''
    }
    const [value, setValue] = useState(initatate)
    const {push} = useHistory()

    const handleChange = (e) => {
        setValue({ 
           
               ...value,
               [e.target.name]: e.target.value
            
        })
    }
  
    console.log(value)
    const login = e => {
        e.preventDefault();
        console.log("login")
        axios.post('http://localhost:9000/api/login', value)
        .then(resp=> {
          console.log(resp);
        })
        .catch(err => {
          console.log(err);
        })
    }


    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={value.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
}
export default Login;