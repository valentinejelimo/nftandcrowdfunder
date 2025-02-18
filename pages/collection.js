import React from "react";

import Style from "../styles/collection.module.css";
import images from "../images";
import { Banner, CollectionProfile, NFTCardTwo } from "../CollectionPage/collectionindex";
import {Brand} from "../components/componentindex";
import Filter from "../components/Filter/Filter";

const Collection = () => {
  const collectionArray = [
    images.monkeymusic,
    images.hero,
    images.nft1,
    images.nft4,
    images.monkeymusic,
    images.hero,
    images.nft1,
    images.nft4
  ];
  return (
    <div className={Style.collection}>
        <Banner bannerImage ={images.monknft} />
        <CollectionProfile />
        <Filter />
        <NFTCardTwo NFTData={collectionArray} />
        <Brand />
    </div>
  );
};

export default Collection;