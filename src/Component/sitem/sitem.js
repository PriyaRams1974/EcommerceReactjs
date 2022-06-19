import React, {useState, useEffect} from "react";
import ITEMLIST from "../categorylist/categorylist2"
import {useNavigate, useLocation,Link } from "react-router-dom";
import '../item/item.css'
import axios from 'axios';
import {Button, Checkbox, Form, FormField,Table } from "semantic-ui-react";
import '../sitemupdate/sitemupdate';



const ITEM = () =>{
    const {state} = useLocation();
    console.log("STATE ITEM OBJECT",state.ItemsDetail);
    console.log("STATE item_uuid recvd",state.ItemsDetail.uuid);
    console.log("STATE item_name recvd",state.ItemsDetail.name);

    const updateData = (e)=>{  
        const { value } = e.target
          console.log("value =",value);
          localStorage.setItem("optionselected",value);

        // setItemdetail(result);
    }

    // const ItemData = async()=>{
    //     const token = localStorage.getItem("token");
    //     console.log("selected_item",selected_item_uuid);
    //     const result = await axios.get(`http://127.0.0.1:7070/api/v2/getItemByUuid`,{
    //         params:{"item_uuid":selected_item_uuid}
    //     })
    //      console.log("result =",result);
    //     setItemdetail(result);
    // }    
    return(
        <div className="sitem-container" >
            <h1>PRODUCT DETAIL sitem</h1>
            <Table singleLine > 
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>NAME</Table.HeaderCell>
                        <Table.HeaderCell>COLOR</Table.HeaderCell>
                        <Table.HeaderCell>DESCRIPTION</Table.HeaderCell>
                        <Table.HeaderCell>PRICE</Table.HeaderCell>
                        <Table.HeaderCell>InStock</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Back</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{state.ItemsDetail.name}</Table.Cell>
                        <Table.Cell>{state.ItemsDetail.color}</Table.Cell>
                        <Table.Cell>{state.ItemsDetail.desc}</Table.Cell>
                        <Table.Cell>{state.ItemsDetail.cost}</Table.Cell>
                        <Table.Cell>{state.ItemsDetail.InStock}</Table.Cell>
                        <Table.Cell>
                            <Link to='/sitemupdate' state={state}>
                                <Button value="UPDATE" onClick={updateData}>UPDATE</Button>
                            </Link>
                        </Table.Cell>
                        <Table.Cell>
                            <Link to='/listitems'>
                                <Button value="BACK" onClick={updateData}>BACK</Button>
                                {/* <Button value="BACK" onClick={()=>updateData()}>BACK</Button> */}
                            </Link>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>  
        </div>
    )
}
export default ITEM;