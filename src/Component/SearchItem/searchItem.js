import React, {useState, useEffect} from "react";
import ITEMCOMP from '../item/item';
import axios from 'axios';


const SEARCHITEM = (props) =>{

    const [Searchitems, setSearchItems] = useState(' ');
    const [Searchitemname, setSearchItemname] = useState(' ');

    const searchchangingFunction = (itemname) =>{
        setSearchItemname(itemname.target.value);
    }

    const SearchItems = async()=>{
        console.log("Searchitemname",Searchitemname);
        const token = localStorage.getItem("token");
        const result = await axios.get(`http://127.0.0.1:7070/api/v2/itemsearchbyletters`, {
            params: {
                name: Searchitemname,
            }
        })
         console.log(result);
         setSearchItems(result);
    }
    // console.log("SearchCatagories",Searchcategories);
    if (Searchitems.data){
    // console.log("CATEGORIES",categories.data.data);

        return(
            <div>
                <h1>SEARCH CATEGORIES</h1>
                <table className="table">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Item Name</th>
                        <th>ItemDesc</th>
                    </tr>
                    </thead>

                    <tbody>
                        { Searchitems.data.data.map((ItemDetail, index)=>{
                            console.log("ItemDetail",ItemDetail.itemName);
                        
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{ItemDetail.itemName}</td>
                                    <td>{ItemDetail.itemDesc}</td>  
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
        <h1>SEARCH ITEMS</h1>
        <input placeholder="Enter the item name" onChange={searchchangingFunction}></input>
        <button type="submit" value="Search" onClick={Searchitems}>Search Items</button>
        </div>
        )
    }
}
export default SEARCHITEM;