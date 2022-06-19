import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useNavigate, useLocation,NavLink, Navigate } from "react-router-dom";
import {Button, Checkbox, Form, FormField } from "semantic-ui-react";

const UpdateComp = ()=>{
    let navigate = useNavigate();
    let {state} = useLocation();
    console.log("state",state.ItemsDetail);
    const [productName, setProductName] = useState(state.ItemsDetail.name);
    const [productColor, setProductColor] = useState(state.ItemsDetail.color);
    const [productDesc, setProductDesc] = useState(state.ItemsDetail.desc);
    const [productPrice, setProductPrice] = useState(state.ItemsDetail.cost);
    const [productInstock, setProductInstock] = useState(state.ItemsDetail.InStock);
    const token = localStorage.getItem("token");
    

    const UpdateItemDetail = async()=> {
        let data = {
             uuid:state.ItemsDetail.uuid,
             name:productName,
             color:productColor,
             desc:productDesc,
             cost:productPrice,
             InStock:productInstock
        }

        const Updateddetails = await axios.put(`http://127.0.0.1:7070/api/v2/updateItems`, data, {
          headers:{"token":token}
        })
         console.log("Updateddetails =",Updateddetails);
         if (Updateddetails){
            //  navigate('/sitemdetail',{state:{ItemsDetail:Updateddetails.data.result}});
            navigate('/listitems')} 
         }
    

    return(
        <Form>
            <Form.Field>
                <label>Product Name: </label>
                <input placeholder="Product Name" value={productName} onChange={(e)=>setProductName(e.target.value)}></input>
            </Form.Field>

            <Form.Field>
                <label>Product Color: </label>
                <input placeholder="Product Color" value={productColor} onChange={(e)=>setProductColor(e.target.value)}></input>
            </Form.Field>

            <Form.Field>
                <label>Product Description: </label>
                <input placeholder="Product Description" value={productDesc} onChange={(e)=>setProductDesc(e.target.value)}></input>
            </Form.Field>

            <Form.Field>
                <label>Product Price: </label>
                <input placeholder="Product Price" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}></input>
            </Form.Field>

            <Form.Field>
                <label>Product InStock: </label>
                <input placeholder="Product InStock" value={productInstock} onChange={(e)=>setProductInstock(e.target.value)}></input>
            </Form.Field>
            <div>
            
            
            <Button type="submit" onClick={UpdateItemDetail}>Submit</Button>
            </div>
            
        </Form>

    )

}
export default UpdateComp;