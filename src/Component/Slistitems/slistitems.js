import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useNavigate, useLocation,NavLink } from "react-router-dom";
import SEARCHITEM from '../SearchItem/searchItem'
import {Button, Checkbox, Form, FormField } from "semantic-ui-react";

const SITEMLIST = () =>{
    const navigate = useNavigate();
    const [items, setItems] = useState(' ');

    const ItemsData = async()=>{
        const token = localStorage.getItem('token');
        const result = await axios.get(`http://127.0.0.1:7070/api/v2/showAllitems`,{  
        })
         console.log("result =",result);
        setItems(result);
    }

    const DeleteItemData = async(data)=>{
        const token = localStorage.getItem("token");
         console.log("selected_item",data);
        
         console.log("delete item - get token",token);
        const result = await axios.delete(`http://127.0.0.1:7070/api/v2/deleteItems?uuid=${data}`,{
            headers:{'token':token}
      //==========      
        }).then((productdata)=>{
            console.log("result =",productdata);
            ItemsData();
        })    
    }

    // const GetIndItemDetail = async(data)=>{
    //     const token = localStorage.getItem('token');
    //      console.log("selected_item",data);
        
    //      console.log("delete item - get token",token);
    //     const result = await axios.get(`http://127.0.0.1:7070/api/v2/getItemByUuid?item_uuid=${data}`,{
    //     headers:{'token':token}
    //   //==========      
    //     }).then((productdata)=>{
    //         console.log("result =",productdata);
    //       //  ItemsData();
    //     })    
    // }

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
        <div className="cat-container">
            <h1>PRODUCTS</h1>
            <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Product Name</th>
                    <th>Product Desc</th>
                </tr>
                </thead>

                <tbody>
                    { items.data.data.map((ItemsDetail, index)=>{
                    console.log("itemsDetail",ItemsDetail.name);
                
                    return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ItemsDetail.name}</td>
                                <td>{ItemsDetail.desc}</td> 
                                {/* <td><Button type="submit" onClick{()=>ItemData(ItemsDetail.uuid)}>View</Button></td> */}
                                <td><Button type="submit" onClick={()=>navigate("/sitemdetail",{state:{ItemsDetail}})}>View</Button></td>
                                <td><Button type="submit" onClick={()=>navigate("/sitemdetail",{state:{ItemsDetail}})}>Update</Button></td>
                                <td><Button type="submit" onClick={()=>DeleteItemData(ItemsDetail.uuid)}>Delete</Button></td>
                            </tr> 
                        )
                    })
                    }   
                </tbody>
            </table>
        </div>
    )
    
}else {
    return(
    <div>
    <h1>PRODUCTS</h1>
    <button type="submit" value="Click me" onClick={ItemsData}>Click Me</button>
    </div>
    )
}
}
export default SITEMLIST;