import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

import Style from "../Subscribe/Subscribe.module.css";
import images from "../../images";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Don't miss a drop</h2>
          <p>
          Join our drop list an dbe the first to get updates on upcoming drops
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get discount</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image src={images.nft3} alt="get updates" height={800} width={800}/>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;