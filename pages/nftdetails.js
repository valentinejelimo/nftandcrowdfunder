import React, {useState, useEffect, useContext} from "react";
import { useRouter } from "next/router";

import Style from "../styles/nftdetails.module.css";
import {Button, Category, Brand} from "../components/componentindex";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

//contract imports

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const nftdetails = () => {

  const {currentAccount} = useContext(NFTMarketplaceContext);

  const [nft, setNft] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(()=> {
    if(!router.isReady) return;
    setNft(router.query);
  }, [router.isReady]);
  return (
    <div>
        <NFTDetailsPage nft={nft} />
        <Brand />
    </div>
  );
};

export default nftdetails;