import React, {useState} from "react";
import Image from "next/image";
import { 
  MdVerified, 
  MdCloudUpload, 
  MdOutlineReportProblem 
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { 
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

import Style from "./AuthorProfileCard.module.css";
import images from "../../images";
import {Button} from "../../components/componentindex";

const AuthorProfileCard = ({ currentAccount }) => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = ()=> {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if(!share) {
      setShare(true);
      setReport(false);
    }else{
      setShare(false);
    }
  };
  const openReport = () => {
    if(!report) {
      setReport(true);
      setShare(false);
    }else{
      setReport(false

      );
    }
  };
  return (
    <div className={Style.authorprofilecard}>
      <div className={Style.authorprofilecard_box}>
        <div className={Style.authorprofilecard_box_img}>
          <Image 
            src={images.profile}
            className={Style.authorprofilecard_box_img_img}
            alt="nft images"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.authorprofilecard_box_info}>
          <h2>
            Address{""} <span><MdVerified/></span>
          </h2>
          <div className={Style.authorprofilecard_box_info_address}>
            <input 
              type="text"
              value={currentAccount}
              id="myInput"
            />
            <FiCopy 
              onClick={()=> copyAddress()} 
              className={Style.authorprofilecard_box_info_address_icon} 
            />
          </div>
        </div>

        <div className={Style.authorprofilecard_box_share}>
          <MdCloudUpload 
            onClick={()=> openShare()} 
            className={Style.authorprofilecard_box_share_icon}
          />

          {share && (
            <div className={Style.authorprofilecard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{""}
                {""}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>{""}
                Instagram
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>{""}
                {""}
                LinkedIn
              </p>
              <p>
                <span>
                  <TiSocialTwitter />
                </span>{""}
                {""}
                Twitter
              </p>
            </div>
          )}

          <BsThreeDots
            onClick={() => openReport()}
            className={Style.authorprofilecard_box_share_icon}
          />

          {
            report && (
              <p className={Style.authorprofilecard_box_share_report}>
                <span>
                  <MdOutlineReportProblem />
                </span>{""}
                {""}
                Report abuse
              </p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;