import React, { useState, useEffect} from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";

import Style from "./SearchBar.module.css";

const SearchBar = ({ onHandleSearch, onClearSearch}) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(()=> {
    const timer = setTimeout(() => setSearch(searchItem), 1000);

    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if(search){
      onHandleSearch(search);
    }else{
      onClearSearch();
    }
  }, [search]);


  return (
    <div className={Style.searchbar}>
        <div className={Style.searchbar_box}>
            <BsSearch className={Style.searchbar_box_icon}/>
            <input type="text" placeholder="Search" 
              onChange={(e)=>setSearchItem(e.target.value)}
              value={searchItem}
            />
            <BsArrowRight className={Style.searchbar_box_icon} />
        </div>
    </div>
  );
};

export default SearchBar;