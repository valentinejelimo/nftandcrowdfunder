import React from "react";

import Style from "./AuthorNFTCardBox.module.css";
import images from "../../images";
import { NFTCardTwo } from "../../CollectionPage/collectionindex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
    collectibles,
    created, 
    like,
    follower,
    following,
    nfts,
    myNFTs,
}) => {
  return (
    <div className={Style.authornftcardbox}>
        {collectibles && (<NFTCardTwo NFTData={nfts}/>)}
        {created && (<NFTCardTwo NFTData={myNFTs}/>)}
        {like && (<NFTCardTwo NFTData={nfts}/>)}
        {follower && (
            <div className={Style.authornftcardbox_box}>
                {followerArray.map((el, i) => (
                    <FollowerTabCard i={i} el={el} />
                ))}
            </div>
        )}
        {following && (
            <div className={Style.authornftcardbox_box}>
                {followingArray.map((el, i) => (
                    <FollowerTabCard i={i} el={el} />
                ))}
            </div>
        )}
    </div>
  );
};

export default AuthorNFTCardBox;