import React, {useState, useEffect} from "react";
import ITEMCOMP from '../item/item';
import axios from 'axios';


const SEARCHCATEGORIES = (props) =>{

    const [Searchcategories, setSearchCategories] = useState(' ');
    const [Searchcategoryname, setSearchCategoryname] = useState(' ');

    const searchchangingFunction = (categoryname) =>{
        setSearchCategoryname(categoryname.target.value);
    }

    const SearchCatagories = async()=>{
        console.log("Searchcategoryname",Searchcategoryname);
        const token = localStorage.getItem("token");
        const result = await axios.get(`http://127.0.0.1:7070/api/v2/searchCategoriesbyletters`, {
            params: {
                categoryName: Searchcategoryname,
            }
        })
         console.log(result);
        setSearchCategories(result);
    }
    // console.log("SearchCatagories",Searchcategories);
    if (Searchcategories.data){
    // console.log("CATEGORIES",categories.data.data);

        return(
            <div>
                <h1>SEARCH CATEGORIES</h1>
                <table className="table">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Category Name</th>
                        <th>categoryDesc</th>
                    </tr>
                    </thead>

                    <tbody>
                        { Searchcategories.data.data.map((CategoryDetail, index)=>{
                            console.log("CategoryDetail",CategoryDetail.categoryName);
                        
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{CategoryDetail.categoryName}</td>
                                    <td>{CategoryDetail.categoryDesc}</td>  
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
        <h1>SEARCH CATEGORIES</h1>
        <input placeholder="Enter the Category name" onChange={searchchangingFunction}></input>
        <button type="submit" value="Search" onClick={SearchCatagories}>Search Categories</button>
        </div>
        )
    }
}
export default SEARCHCATEGORIES;