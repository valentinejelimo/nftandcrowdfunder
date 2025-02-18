import React, {useState, useEffect, useContext} from "react";

import Style from "../styles/uploadnft.module.css";
import {UploadNFT} from "../UploadNFT/uploadnftindex";

import {NFTMarketplaceContext} from "../Context/NFTMarketplaceContext";

const uploadnft = () => {
    const { uploadToIPFS, createNFT} = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.uploadnft}>
        <div className={Style.uploadnft_box}>
            <div className={Style.uploadnft_box_heading}>
                <h1>Create a new NFT</h1>
                <p>Upload your NFTs into your account to trade them</p>
            </div>

            <div className={Style.uploadnft_box_title}>
                <h2>Images upload</h2>
                <p>
                File types supported: JPG, PNG..  Max size:100mb
                </p>
            </div>

            <div className={Style.uploadnft_box_form}>
                <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT} />
            </div>
        </div>
    </div>
  );
};

export default uploadnft; 