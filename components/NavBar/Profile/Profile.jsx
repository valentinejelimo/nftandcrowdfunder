import React from "react";
import Image from "next/image";
import {FaUserAlt, FaRegImage, FaUserEdit} from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import {TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";

import Style from './Profile.module.css';
import images from "../../../images";

const Profile = ({currentAccount}) => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image 
          src={images.profile} 
          alt='user profile' 
          width={50} height={50} 
          className={Style.profile_account_img} 
        />
        <div className={Style.profile_account_info}>
          <p>Address</p>
          <small>{currentAccount}..</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt/>
            <p>
              <Link href={{pathname: "/author"}}>My profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage/>
            <p>
              <Link href={{pathname: "/author"}}>My items</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter/>
            <p>
              <Link href={{ pathname: "/contactus" }}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload/>
            <p>
              <Link href={{ pathname: "/aboutus" }}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;