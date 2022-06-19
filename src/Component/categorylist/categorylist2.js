import React, {useState, useEffect} from "react";
import ITEMCOMP from '../item/item';
import axios from 'axios';
import {useNavigate,NavLink } from "react-router-dom";
import '../categorylist/categorylist2.css';

import SEARCHCATEGORIES from '../SearchCategories/searchCategory';

const CATEGORYLIST2 = (props) =>{
    const navigate = useNavigate();
    const [categories, setCategories] = useState(' ');
    // const [Searchcategories, setSearchCategories] = useState(' ');

    const CategoriesData = async()=>{
        const token = localStorage.getItem("token");
        const result = await axios.get(`http://127.0.0.1:7070/api/v2/getAllCategories`,{
            headers:{"token":token}
        })
        // console.log(result);
        setCategories(result);
    }

    const SearchCatagories=()=> {
            console.log("search category selected");
        return(
           <SEARCHCATEGORIES/>     
        );
        
    }
    console.log("Catagories",categories);
    if (categories.data) {
    // console.log("CATEGORIES",categories.data.data);

        return(
            <div>
                <h1>CATEGORIES</h1>
                <button type="submit" value="Click me" width="100" height="200" onClick={()=>navigate("/searchcategory")}>Search Category</button>

            <div className="catogory-container" >
            {/* <div className="catogory-container"> */}

                { categories.data.data.map((CategoryDetail, index)=>{
                    console.log("CategoryDetail",CategoryDetail.categoryName);
                
                    return(
                        <div key={index} onClick={()=>navigate("/itemlist",{state:{cat_uuid: CategoryDetail.uuid}})}>
                            <p>{index + 1}</p>
                            <p>{CategoryDetail.categoryName}</p>
                            <p>{CategoryDetail.categoryDesc}</p>  
                        </div> 
                        
                    )
                })
                }   
            
            </div>  
            </div>
        )
        
    }else {
        return(
        <div>
        <h1>CATEGORIES</h1>
        <button type="submit" value="Click me" onClick={CategoriesData}>Click Me</button>
        </div>
        )
    }
}
export default CATEGORYLIST2;