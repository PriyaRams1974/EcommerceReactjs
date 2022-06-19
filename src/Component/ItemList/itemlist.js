import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useNavigate, useLocation,NavLink } from "react-router-dom";
import SEARCHITEM from '../SearchItem/searchItem'

const ITEMLIST = () =>{
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log("STATE OBJECT",state);
    console.log("STATE cat_uuid",state.cat_uuid);
    let selected_cat_uuid = state.cat_uuid;
    const [items, setItems] = useState(' ');
    const [Searchitems, setSearchItems] = useState(' ');

    const ItemsData = async()=>{
        const token = localStorage.getItem("token");
        console.log("selected_cat_uuid",selected_cat_uuid);
        const result = await axios.get(`http://127.0.0.1:7070/api/v2/getitemsBasedonCategory`,{
            params:{"cat_uuid":selected_cat_uuid}
        })
         console.log("result =",result);
        setItems(result);
    }

    const SearchItems=()=> {
            console.log("search item selected");
        return(
           <SEARCHITEM/>     
        );
        
    }
    console.log("items",items);
    if (items.data) {
    // console.log("CATEGORIES",categories.data.data);

        return(
            <div>
                <h1>ITEMS</h1>
                <button type="submit" value="Click me" width="100" height="200" onClick={()=>navigate("/searchitem")}>Search Item</button>
                {ItemsData}
            <div className="items-container" >
            {/* <div className="catogory-container"> */}

                { items.data.data.map((ItemsDetail, index)=>{
                    console.log("itemsDetail",ItemsDetail.name);
                
                    return(
                        <>
                        <div key={index} onClick={()=>navigate("/itemdetail",{state:{item_uuid: ItemsDetail.uuid}})}>
                            <p>{index + 1}</p>
                            <p>{ItemsDetail.name}</p>
                            <p>{ItemsDetail.desc}</p>  
                        </div> 
                        </>
                    )
                })
                }   
            
            </div>  
            </div>
        )
        
    }else {
        return(
        <div>
        <h1>ITEMS</h1>
        <button type="submit" value="Click me" onClick={ItemsData}>Click Me</button>
        </div>
        )
    }
}
export default ITEMLIST;