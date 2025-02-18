import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
  MdVerified, 
  MdCloudUpload,
  MdCloudDownload,
  MdTimer, 
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import { 
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialYoutube,
 } from "react-icons/ti";
 import { BiTransferAlt, BiDollar } from "react-icons/bi";

import Style from "./NFTDescription.module.css";
import images from "../../images";
import { Button } from "../../components/componentindex";
import { NFTTabs } from "../nftdetailsindex";

//contract

import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTDescription = ({nft}) => {
  const [social, setSocial] = useState(false);
  const [download, setDownload] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);

  const router = useRouter();


  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else{
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else{
      setNFTMenu(false);
    }
  };


  const downloadNFT = () => {};

  const {buyNFT, currentAccount} = useContext(NFTMarketplaceContext);
 
  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/*ONE */}
        <div className={Style.NFTDescription_box_share}>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openSocial()}
            />
            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#"><TiSocialFacebook />Facebook</a>
                <a href="#"><TiSocialInstagram />Instagram</a>
                <a href="#"><TiSocialLinkedin />Linkedin</a>
                <a href="#"><TiSocialTwitter />Twitter</a>
                <a href="#"><TiSocialYoutube />Youtube</a>
              </div>
            )}

            <MdCloudDownload
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => downloadNFT()}
            />
            {download && (
              <div className={Style.NFTDescription_box_share_box_download}>
                download fee
              </div>
            )}

            <BsThreeDots
              className={Style.NFTDescription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change Price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report problem
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>
        {/*TWO */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>{nft.name} #{nft.tokenId}</h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image 
                src={images.profile}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <Link href={{pathname: "/author", query: `${nft.seller}`}}>
                <span>
                  Address <MdVerified />
                </span>
                </Link>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
            <Image 
                src={images.profile}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Creator</small> <br />
              </div>
            </div>
          </div>


        

        <div className={Style.NFTDescription_box_profile_biding}>
          <p>
            <MdTimer /> <span>Price details </span>
          </p>

          <div className={Style.NFTDescription_box_profile_biding_box_price}>
            <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
              <small>Current Price</small>
              <p>
                {nft.price} <span>ETH</span>
              </p>
            </div>
          </div>
          
          <div className={Style.NFTDescription_box_profile_biding_box_button}>
            {currentAccount == nft.seller.toLowerCase() ? (
              <p>You can't buy your own NFT</p>
            ) : currentAccount == nft.owner.toLowerCase() ?(
              <Button
              icon=<FaWallet/>
              btnName="List"
              handleClick={() => router.push(`/reselltoken?=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}
              classStyle={Style.button}
            />
            ) : (
              <Button
              icon=<FaPercentage/>
              btnName="Buy"
              handleClick={() => buyNFT(nft)}
              classStyle={Style.button}
            />
            )}
          </div>
        </div>
       </div>
     </div>
    </div>
  );
};

export default NFTDescription; 