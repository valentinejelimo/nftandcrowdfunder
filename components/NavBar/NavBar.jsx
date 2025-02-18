import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsSearch } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Profile, SideBar } from "./index";
import { Button } from "../componentindex";
import images from "../../images";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const router = useRouter(); 

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setDiscover(false);
      setHelp(true);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    }
  };

  const openProfile = () => {
    setProfile(!profile);
    setHelp(false);
    setDiscover(false);
  };

  const openSideBar = () => {
    setOpenSideMenu(!openSideMenu);
  };

  const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.finalogo}
              alt="NFT MARKET"
              width={100}
              height={100}
              onClick={() => router.push("/")}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <Button btnName="Search NFTs" handleClick={() => router.push("/search")} />
          </div>
        </div>

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {!currentAccount && (
            <div className={Style.navbar_container_right_button}>
              <Button btnName="Connect" handleClick={connectWallet} />
            </div>
          )}

          {currentAccount && (
            <>
              <div className={Style.navbar_container_right_button}>
                <Button btnName="Create" handleClick={() => router.push("/uploadnft")} />
              </div>
              <div className={Style.navbar_container_right_profile_box}>
                <div className={Style.navbar_container_right_profile}>
                  <Image
                    src={images.profile}
                    alt="Profile"
                    width={40}
                    height={40}
                    onClick={openProfile}
                    className={Style.navbar_container_right_profile}
                  />
                  {profile && <Profile currentAccount={currentAccount} />}
                </div>
              </div>
            </>
          )}

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={openSideBar} />
          </div>
        </div>
      </div>

      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
