import React, { useState } from "react";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

import Style from "./NFTCardTwo.module.css";
import { LikeProfile } from "../../components/componentindex";

const NFTCardTwo = ({ NFTData }) => {

  console.log("NFT Data Received:", NFTData);

  return (
    <div className={Style.nftcardtwo}>
      {NFTData && NFTData.length > 0 ? (
        NFTData.map((el, i) => (
          <Link href={{ pathname: "/nftdetails", query: el }} key={i + 1}>
            <div className={Style.nftcardtwo_box} key={i + 1}>
              <div className={Style.nftcardtwo_box_like}>
              </div>

              <div className={Style.nftcardtwo_box_img}>
                <Image
                  src={el.image}
                  alt="NFT"
                  width={500}
                  height={500}
                  objectFit = "cover"
                  className={Style.nftcardtwo_box_img_img}
                />
              </div>

              <div className={Style.nftcardtwo_box_info}>
                <div className={Style.nftcardtwo_box_info_left}>

                  <p>{el.name}</p>
                </div>
                <small>4{i + 2}</small>
              </div>

              <div className={Style.nftcardtwo_box_price}>
                <div className={Style.nftcardtwo_box_price_box}>
                  <small>Price</small>
                  <p>{el.price} ETH</p>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No NFTs found</p>
      )}
    </div>
  );
};

export default NFTCardTwo;
