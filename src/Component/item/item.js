import React, {useState, useEffect} from "react";
import ITEMLIST from "../categorylist/categorylist2"
import {useNavigate, useLocation,NavLink } from "react-router-dom";
import '../item/item.css'
import axios from 'axios';


const ITEM = () =>{
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log("STATE ITEM OBJECT",state);
    console.log("STATE item_uuid",state.item_uuid);
    let selected_item_uuid = state.item_uuid;
    const [itemdetail, setItemdetail] = useState(' ');

    const ItemData = async()=>{
        const token = localStorage.getItem("token");
        console.log("selected_item",selected_item_uuid);
        const result = await axios.get(`http://127.0.0.1:7070/api/v2/getItemByUuid`,{
            params:{"item_uuid":selected_item_uuid}
        })
         console.log("result =",result);
        setItemdetail(result);
    }

    if (itemdetail.data) {
        // console.log("CATEGORIES",categories.data.data);
      let detail = itemdetail.data.result;
            return(
                <div className="container" >
                    <h1>PRODUCT DETAIL</h1>
                    <button type="submit" value="Click me" width="100" height="200" onClick={()=>navigate("/categories")}>Show Categories</button>                
                    <div className="item-container" >   
                        <p>NAME:        :{detail.name}</p>
                        <p>COLOR:       :{detail.color}</p>
                        <p>DESCRIPTION: :{detail.desc}</p> 
                        <p>InStock      :{detail.InStock}</p>
                        <p>PRICE        :{detail.cost}</p>  
                    </div>  
                </div>
            )
            
        }else {
            return(
            <div>
            <h1>ITEM DETAIL</h1>
            <button type="submit" value="Click me" onClick={ItemData}>Click Me</button>
            </div>
            )
        }
}
export default ITEM;