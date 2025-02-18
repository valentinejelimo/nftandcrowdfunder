import React, {useState} from "react";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

import Style from "./AuthorTaps.module.css";

const AuthorTaps = ({ 
  setCollectibles,
  setCreated, 
}) => {

  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created By adnmin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = ()=> {
    if(!openList){
      setOpenList(true);
    }else{
      setOpenList(false);
    }
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;
    console.log(btnText);
    if(btnText == "Listed on market"){
      setCollectibles(true);
      setCreated(false);
      setActiveBtn(1);
    } else if(btnText == "Owned"){
      setCollectibles(false);
      setCreated(true);
      setActiveBtn(2);
    } 
  };
  
  return (
    <div className={Style.authortaps}>
      <div className={Style.authortaps_box}>
        <div className={Style.authortaps_box_left}>
          <div className={Style.authortaps_box_left_btn}>
            <button 
              onClick={(e)=> openTab(e)} 
              className={'${activeBtn == 1 ? Style.active : ""} '}
            >
              Listed on market{""}
            </button>
            <button 
              onClick={(e)=> openTab(e)} 
              className={'${activeBtn == 2 ? Style.active : ""} '}
            >
              Owned{""}
            </button>
          </div>
        </div>

        <div className={Style.authortaps_box_right}>
          <div 
            className={Style.authortaps_box_right_para}
            onClick={() => openDropDownList()}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
          </div>
          {openList && (
            <div className={Style.authortaps_box_right_list}>
              {listArray.map((el, i)=> (
                <div 
                  key={i + 1} 
                  onClick={() => setSelectedMenu(el)} 
                  className={Style.authortaps_box_right_list_items}
                >
                  <p>{el}</p>
                  <span>{selectedMenu == el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;