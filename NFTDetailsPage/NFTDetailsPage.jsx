import React from "react";

import Style from "./NFTDetailsPage.module.css";
import {NFTDescription, NFTTabs, NFTDetailImage} from "./nftdetailsindex";

const NFTDetailsPage = ({nft}) => {
  return (
    <div className={Style.nftdetailspage}>
      <div className={Style.nftdetailspage_box}>
        <NFTDetailImage nft={nft} />
        <NFTDescription nft={nft} />
      </div>
    </div>
  );
};

export default NFTDetailsPage;