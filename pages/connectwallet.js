import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import Style from "../styles/connectwallet.module.css";
import images from "../images";

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";


const connectwallet = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    const {currentAccount, connectWallet} = useContext(NFTMarketplaceContext)
    const providerArray = [
        {
            provider: images.provider1,
            name: "Metamask",
        },
        {
            provider: images.provider2,
            name: "WalletConnect",
        },
        {
            provider: images.provider3,
            name: "walletlink",
        },
        {
            provider: images.provider4,
            name: "Formatic",
        },
    ];
  return (
    <div className={Style.connectwallet}>
        <div className={Style.connectwallet_box}>
            <h1>Connect your wallet</h1>
            <p className={Style.connectwallet_box_para}>
                Connect with your available wallet or create a new wallet
            </p>

            <div className={Style.connectwallet_box_provider}>
                {providerArray.map((el, i)=> (
                    <div 
                        className={`${Style.connectwallet_box_provider_item} ${
                            activeBtn == i + 1 ? Style.active : ""
                        }`}
                        key={i + 1}
                        onClick={() => (setActiveBtn(i + 1), connectWallet())}
                    >
                        <Image
                            src={el.provider}
                            alt={el.provider}
                            width={50}
                            height={50}
                            className={Style.connectwallet_box_provider_item_img}
                        />
                        <p>{el.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default connectwallet;