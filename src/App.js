import logo from './logo.svg';
import './App.css';
import HookTesingComp from './Component/HookComp/HookComponent'
import CATEGORYLIST from "./Component/categorylist/categorylist"
import ITEM from './Component/item/item';
import LOGIN from "./Component/Login/login";
import CATEGORIESLIST2 from "./Component/categorylist/categorylist2";
import ITEMLIST from "./Component/ItemList/itemlist";
import SITEMLIST from "./Component/Slistitems/slistitems";
import SITEM from './Component/sitem/sitem';
import SITEMUPDATE from './Component/sitemupdate/sitemupdate';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SEARCHCATEGORIES from './Component/SearchCategories/searchCategory';

function App() {
  return (
    <div className="App">
      {/* <h1>TESTING...</h1> */}
      {/* <LOGIN/> */}
      {/* <ITEMLISTCOMP data="Parent"/> */}
      {/* <HookTesingComp/> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LOGIN />} />
        {/* <Route path="categories" element={<CATEGORIESLIST2 />} /> */}
        <Route path="categories" element={<CATEGORYLIST />} />
        <Route path="searchcategory" element={<SEARCHCATEGORIES />} />
        <Route path="itemlist" element={<ITEMLIST/>} />
        <Route path="itemdetail" element={<ITEM/>} />
        <Route path="listitems" element={<SITEMLIST/>} />
        <Route path="sitemdetail" element={<SITEM/>} />
        <Route path="sitemupdate" element={<SITEMUPDATE/>} />

        
      </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
