import React from "react";
import Image from "next/image";

import Style from "./Service.module.css";
import images from "../../images";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <div className={Style.service_box_item_step}>
            <span>Step 1</span>
            <h3>Explore</h3>
            <p>Check through our page</p>
          </div>
        </div>
        <div className={Style.service_box_item}>
          <div className={Style.service_box_item_step}>
            <span>Step 2</span>
            <h3>Connect wallet</h3>
            <p>Connect your wallet</p>
          </div>
        </div>
        <div className={Style.service_box_item}>
          <div className={Style.service_box_item_step}>
            <span>Step 3</span>
            <h3>Create or collect</h3>
            <p>Create NFTs and create your funding campaigns</p>
          </div>
        </div>
        <div className={Style.service_box_item}>
          <div className={Style.service_box_item_step}>
            <span>Step 4</span>
            <h3>Trade or list campaigns</h3>
            <p>Connect your wallet and partcipate in our services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
