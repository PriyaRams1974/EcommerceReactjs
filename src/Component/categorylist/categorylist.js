import React, {useState, useEffect} from "react";
import ITEMCOMP from '../item/item';
import axios from 'axios';
import '../categorylist/categorylist.css'
import {Button, Checkbox, Form, FormField } from "semantic-ui-react";

import SEARCHCATEGORIES from '../SearchCategories/searchCategory';

const CATEGORYLIST = (props) =>{

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
            <div className="cat-container">
                <h1>CATEGORIES</h1>
                <button type="submit" value="Search" onClick={SearchCatagories}>Search Categories</button>
                <table className="table">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Category Name</th>
                        <th>categoryDesc</th>
                    </tr>
                    </thead>

                    <tbody>
                        { categories.data.data.map((CategoryDetail, index)=>{
                            console.log("CategoryDetail",CategoryDetail.categoryName);
                        
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{CategoryDetail.categoryName}</td>
                                    <td>{CategoryDetail.categoryDesc}</td> 
                                    <td><Button type="submit" onClick={SearchCatagories}>View</Button></td>
                                    <td><Button type="submit" onClick={SearchCatagories}>Update</Button></td>
                                    <td><Button type="submit" onClick={SearchCatagories}>Delete</Button></td>
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
        <h1>CATEGORIES</h1>
        <button type="submit" value="Click me" onClick={CategoriesData}>Click Me</button>
        </div>
        )
    }
}
export default CATEGORYLIST;