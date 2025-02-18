import React from "react";
import Image from "next/image";

import Style from "./NFTTabs.module.css";

const NFTTabs = ({dataTab, icon}) => {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el, i)=> (
        <div className={Style.NFTTabs_box} key={i + 1}>
          <Image
            src={el}
            alt="profile image"
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer by $644 by <span>Harry K</span> {icon}
            </span>
            <small>July 6 - 4.23 AM</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;