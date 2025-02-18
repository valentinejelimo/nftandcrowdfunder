import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialYoutube, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialInstagram, 
  TiArrowSortedDown, 
  TiArrowSortedUp
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

import Style from "./Footer.module.css";
import images from "../../images";
import {Discover, HelpCenter} from "../NavBar/index";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.finalogo} alt="footer logo" height={100} width={100} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio explicabo, et modi labore voluptatem quia recusandae at? Exercitationem facere eius veritatis cupiditate eos maxime placeat excepturi labore? Perferendis, in.
          
          </p>
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin/>
            </a>
            <a href="#">
              <TiSocialTwitter/>
            </a>
            <a href="#">
              <TiSocialYoutube/>
            </a>
            <a href="#">
              <TiSocialInstagram/>
            </a>
          </div>
        </div>
        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter/>
        </div>

        <div className={Style.subscribe}>
          <h3>More</h3>


          <div className={Style.subscribe_box_info}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Labore rerum assumenda unde nobis aspernatur debitis numquam, odio repellat alias nulla, ut quidem quas obcaecati libero optio ex, architecto ipsam corporis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;