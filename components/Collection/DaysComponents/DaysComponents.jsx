import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

import Style from "./DaysComponents.module.css";
import images from "../../../images";

const DaysComponents = ({el, i}) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image 
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            width={500}
            height={300}
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
            src={images.creatorbg2} 
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_1}
          />
           <Image
            src={images.creatorbg2}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_2}
          />
           <Image
            src={images.creatorbg2}
            alt="profile"
            width={200}
            height={200}
            className={Style.daysComponent_box_img_3}
          />
          
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={el.user}
                alt="profile"
                width={30}
                height={30}
                className={Style.daysComponent_box_title_info_profile_img}
              />
              <p>Creator
                <span>Harry K
                  <small><MdVerified /></small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>1.2 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;