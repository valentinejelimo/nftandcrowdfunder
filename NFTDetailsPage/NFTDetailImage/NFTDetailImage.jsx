import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

import Style from "./NFTDetailImage.module.css";
import images from "../../images";

const NFTDetailImage = ({nft}) => {

  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);

  const openDescription = () => {
    if (!description){
      setDescription(true);
    } else{
      setDescription(false);
    }
  };

  const openDetails = () => {
    if(!details){
      setDetails(true);
    } else{
      setDetails(false);
    }
  }

  return (
    <div className={Style.deatilsimage}>
      <div className={Style.deatilsimage_box}>
        <div className={Style.deatilsimage_box_nft}>

          <div className={Style.deatilsimage_box_nft_img}>
            <Image
              src={nft.image}
              alt="NFT image"
              
              width={700}
              height={700}
              
            />
          </div>
        </div>

        <div 
          className={Style.deatilsimage_box_description}
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown/>}
        </div>
        { description && (
          <div className={Style.deatilsimage_box_description_box}>
            <p>
              {nft.description}
            </p>
          </div>
        )}

        <div 
          className={Style.deatilsimage_box_details}
          onClick={() => openDetails()}
          >
          <p>Details</p>
          {details ?  <TiArrowSortedUp /> : <TiArrowSortedDown/> }
        </div>
        {details && (
          <div className={Style.deatilsimage_box_details_box}>
          <p>
            <small> Address</small>
            <br></br>
            {nft.seller}
          </p>
          <p>
            <small>Token ID</small>
            &nbsp; &nbsp; {nft.tokenId}
          </p>
        </div>
        )}
      </div>
    </div>
  );
};
 
export default NFTDetailImage;