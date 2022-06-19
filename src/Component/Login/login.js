import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Button, Checkbox, Form, FormField } from "semantic-ui-react";
import CATEGORYLIST from "../categorylist/categorylist";
import SEARCHCATEGORIES from '../SearchCategories/searchCategory';
import CATEGORYLIST2 from "../categorylist/categorylist2";
import SITEMLIST from "../Slistitems/slistitems";




const Login = ()=> {
    const [data, setData] = useState(' ');
   const [declaredData, changeFunction] = useState('false');
   const [email, emailchangeFunction] = useState('');
   const [password, passwordchangeFunction] = useState('');



   const changingFunction = () =>{
       changeFunction('true');
   }

   const emailchangingFunction = (email) =>{
    emailchangeFunction(email.target.value);
}

const passwordchangingFunction = (password) =>{
    passwordchangeFunction(password.target.value);
}


const loginData = async()=>{
    let data = {
       "email":email,
       "password":password 
    }

    const result = await axios.post(`http://127.0.0.1:7070/api/v1/login`,data)
        localStorage.setItem("token",result.data.token);
        console.log(localStorage.getItem("token"));
        setData(result);
        // console.log("result",JSON.stringify(result));

      }



   if (data.status == 200) {
       return(
           <div>
               {/* <h1>LOGIN SUCCESS</h1> */}
               {/* <CATEGORYLIST2/> */}
               {/* <SEARCHCATEGORIES/> */}
                {/* <CATEGORYLIST/> */}
                <SITEMLIST/>

           </div>
       )
   }else {
    return(
        <Form>
            <Form.Field>
                <label>Email: </label>
                <input placeholder="Enter your Email" onChange={emailchangingFunction}></input>
            </Form.Field>

            <Form.Field>
                <label>Password: </label>
                <input placeholder="Enter your Password" onChange={passwordchangingFunction}></input>
            </Form.Field>

            <Form.Field>
                <Checkbox label= 'I agree' onChange={changingFunction}></Checkbox>
            </Form.Field>

            <Button type="submit" onClick={loginData}>Submit</Button>
        </Form>
    )
   }

};

export default Login;