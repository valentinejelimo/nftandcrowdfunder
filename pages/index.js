import React, { useState, useContext, useEffect } from "react";

import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  Title,
  NFTCard,
  Brand,
  DonationCard,
  DonationCardTwo,
  PopUp,
} from "../components/componentindex";

import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { 
    titleData,
    fetchNFTs,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  const [allcampaign, setAllcampaign] = useState();
  const [usercampaign, setUsercampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampainsData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampainsData;
      setAllcampaign(allData);
      setUsercampaign(userData);
    };
  }, []);

  //Donation pop up

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  useEffect(() => {
    const getNFTs = async () => {
      try {
        const items = await fetchNFTs();
        if (Array.isArray(items)) {
          setNfts(items.reverse());
          setNftsCopy(items);
        } else {
          console.error("Fetched items are not an array:", items);
          setNfts([]);
          setNftsCopy([]);
        }
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setNfts([]);
        setNftsCopy([]);
      }
    };

    getNFTs();
  }, [fetchNFTs]);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <Title heading="Featured NFTs" paragraph="Explore the featured NFTs" />
      <NFTCard NFTData={nfts} />
      <DonationCardTwo 
        titleData={titleData} 
        createCampaign={createCampaign} 
      />
      <DonationCard
        title="All listed campaigns"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
      <Brand />
    </div>
  );
};

export default Home;
