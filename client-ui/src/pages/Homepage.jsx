import Footer from "../components/Footer"
import Form from "../components/Form.jsx";
import Header from "../components/Header"
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
const Homepage = function () {
   // let mymessage ="this is message"
    const [mymessage, setMessage] = useState("");
    useEffect(() => {
        axios.get('http://localhost:4040/api/v1/hello').then((response) => {
           setMessage(response.data.message);
           
        })
    });
    return (

        <>
            <Header />
            <div>{mymessage}</div>
            {/* {axios.get('http://localhost:4040/api/v1/hello').then((message))} */}
            <Form />
            <Footer />
        </>
    );
}

export default Homepage