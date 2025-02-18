import React, { useState, useEffect, useContext } from "react";
import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "../CollectionPage/collectionindex";
import { Brand, Title } from "../components/componentindex";
import images from "../images";
import { AuthorProfileCard, AuthorTaps, AuthorNFTCardBox } from "../authorPage/authorpageindex";
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Author = () => {
  const [collectibles, setCollectibles] = useState(true);
  const [created, setCreated] = useState(false);


  const { fetchMyNFTsorListedNFTs, currentAccount } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    fetchMyNFTsorListedNFTs("fetchItemsListed").then((items) => {
      setNfts(items);
    });
  }, []);

  useEffect(() => {
    fetchMyNFTsorListedNFTs("fetchMyNFT").then((items) => {
      setMyNFTs(items);
    });
  }, []);

  return (
    <div className={Style.banner}>
      <Banner bannerImage={images.monknft} />
      <AuthorProfileCard currentAccount={currentAccount} />
      <AuthorTaps
        setCollectibles={setCollectibles}
        setCreated={setCreated}
      />
      <AuthorNFTCardBox
        collectibles={collectibles}
        created={created}
        nfts={nfts}
        myNFTs={myNFTs}
      />
      <Brand />
      <NFTCardTwo />
    </div>
  );
};

export default Author;
