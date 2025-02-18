import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import {GrClose} from "react-icons/gr";
import {TiSocialFacebook,TiSocialYoutube, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";
import { useRouter } from 'next/router';


import Style from './SideBar.module.css';
import images from "../../../images";
import Button from "../../Button/Button";

const SideBar = ({ setOpenSideMenu, connectWallet, currentAccount}) => {
  //use state
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const router = useRouter();

  const discover =[
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author-Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
  ];
  //help center
  const helpcenter =[
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
  ];

const openDiscoverMenu = ()=> {
  if(!openDiscover){
    setOpenDiscover(true);
  } else{
    setOpenDiscover(false);
  }
};

const openHelpMenu = ()=> {
  if(!openHelp){
    setOpenHelp(true);
  } else{
    setOpenHelp(false);
  }
};

const closeSideBar = ()=> {
  setOpenSideMenu(false);
};

return (
    <div className={Style.sideBar}>
      <GrClose className={Style.sideBar_closeBtn} onCick={() => closeSideBar()}/>
      <div className={Style.sideBar_box}>
        <Image src={images.finalogo} alt="logo" width={150} height={150} />
        <p>Discover topics on the NFTs</p>
        <div className={Style.sideBar_social}>
          <a href="">
            <TiSocialFacebook/>
          </a>
          <a href="">
            <TiSocialLinkedin/>
          </a>
          <a href="">
            <TiSocialTwitter/>
          </a>
          <a href="">
            <TiSocialInstagram/>
          </a>
          <a href="">
            <TiSocialYoutube/>
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={()=> openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {
            openDiscover &&(
              <div className={Style.sideBar_discover}>
                {discover.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: '${el.link}'}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
        <div>
          <div className={Style.sideBar_menu_box} onClick={()=> openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {helpcenter.map((el, i)=> (
                  <p key={i + 1}>
                    <Link href={{pathname: '${el.link}'}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
      </div>
      <div className={Style.sideBar_button}>
        {
          currentAccount == "" ? (
          <Button btnName="Connect Wallet" handleClick={() => connectWallet()}/>
        ) : (

            <Button btnName="Create" handleClick={() => router.push("/uploadnft")}/>

        )}

      </div>
    </div>
  );
};

export default SideBar;