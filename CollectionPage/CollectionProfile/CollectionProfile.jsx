import React from "react";
import Image from "next/image";
import {
    TiSocialYoutube, 
    TiSocialLinkedin, 
    TiSocialTwitter, 
    TiSocialInstagram, 
  } from "react-icons/ti";

import Style from "./CollectionProfile.module.css";
import images from "../../images";

const CollectionProfile = () => {
  const cardArray = [1,2,3,4]
  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image 
            src={images.hero}
            width={800}
            height={800}
            className={Style.collectionProfile_box_left_img} 
          />

          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialLinkedin/>
            </a>
            <a href="#">
              <TiSocialInstagram/>
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={Style.collectionProfile_box_middle}>
          <h1>NFTs Collections</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sed temporibus minus enim distinctio odit rerum! 
          </p>
          <div className={Style.collectionProfile_box_middle_box}>
            {cardArray.map((el, i)=> (
              <div className={Style.collectionProfile_box_middle_box_item} key={i + 1}>
                <small>Floor price</small>
                <p>${i + 1}88990</p>
                <span>${i + 2}.11%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionProfile;