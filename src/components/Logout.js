import React, { useEffect } from "react";
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props)=> {

    useEffect(()=> {
        const token = localStorage.getItem("token");
        // axios.post('http://localhost:9000/api/logout', {}, {
        //     headers:{
        //         authorization: localStorage.getItem('token')
        //     }
        // })
        axiosWithAuth()
        .post(`/logout`)
        .then(resp => {
                localStorage.removeItem('token');
                props.history.push('/login');
            });
    }, []);
    return(<div></div>);
}

export default Logout;