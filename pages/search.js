import React, { useEffect, useState, useContext } from "react";

import Style from "../styles/search.module.css";
import { Brand } from "../components/componentindex";
import SearchBar from "../SearchPage/SearchBar/SearchBar";
import { Filter } from "../components/componentindex";
import {NFTCardTwo, Banner} from "../CollectionPage/collectionindex";
import AudioCardSmall from "../components/AudioLIve/AudioCardSmall/AudioCardSmall";
import images from "../images";

//contract import 
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";


const search = () => {
  const {fetchNFTs} = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(()=> {
    fetchNFTs().then((items)=> {
      setNfts(items.reverse());
      setNftsCopy(items);
    });
  }, []);

  const onHandleSearch = (value)=> {
    const filteredNFTS = nfts.filter(({name}) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredNFTS.length === 0){
      setNfts(nftsCopy);
    }else{
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = ()=> {
    if(nfts.length && nftsCopy.length){
      setNfts(nftsCopy);
    }
  }

  return (
    <div className={Style.searchpage}>
      <Banner bannerImage={images.monkeymusic}/>
      <SearchBar onHandleSearch = {onHandleSearch } onClearSearch={onClearSearch} />
      <NFTCardTwo NFTData={nfts} />
      <Brand />
    </div>
  );
};

export default search;