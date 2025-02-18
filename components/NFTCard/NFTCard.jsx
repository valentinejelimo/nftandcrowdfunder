import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

import Style from "./NFTCard.module.css";
import images from "../../images";

const NFTCard = ({NFTData}) => {  
  
  return (
    <div className={Style.NFTCard}>
      {NFTData.map((el, i) => (
        <div className={Style.NFTCard_box} key={i + 1}>
          <div className={Style.NFTCard_box_img}>
            <Image
              src={el.image} 
              alt="NFT images"
              width={600}
              height={600}
              className={Style.NFTCard_box_img_img}
            />
          </div>
          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
            </div>
            <div className={Style.NFTCard_box_update_right}>
            </div>
          </div>
          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>{el.name} #{el.tokenId}</h4>
                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div className={Style.NFTCard_box_update_details_price_box_bid}>
                    <small>Price</small>
                    <p>{el.price} ETH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
