<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Style from "./SliderCard.module.css";
import images from "../../../images";

const SliderCard = ({el, i}) => { 
  return (
    <motion.div className={Style.sliderCard}>
        <div className={Style.sliderCard_box}>
            <motion.div className={Style.sliderCard_box_img}>
                <Image 
                    src={el.background} 
                    alt="slider profile" 
                    width={300} 
                    height={300} 
                    className={Style.sliderCard_box_img_img}
                    style={{ objectFit: "cover" }}
                />
            </motion.div>
            <div className={Style.sliderCard_box_title}>
                <p>Video #192</p>
                <div className={Style.sliderCard_box_title_like}>
                 
                    <small>1 of 1000</small>
                </div>
            </div>

            <div className={Style.sliderCard_box_price}>
                <div className={Style.sliderCard_box_price_box}>
                    <small>Current bid</small>
                    <p>0.4 ETH</p>
                </div>

                <div className={Style.sliderCard_box_price_time}>
                    <small>remaining time</small>
                    <p>2h : 39m : 34s</p>
                </div>
            </div> 
        </div>
    </motion.div>
  ); 
};

=======
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Style from "./SliderCard.module.css";
import images from "../../../images";

const SliderCard = ({el, i}) => {
  return (
    <motion.div className={Style.sliderCard}>
        <div className={Style.sliderCard_box}>
            <motion.div className={Style.sliderCard_box_img}>
                <Image 
                    src={el.background} 
                    alt="slider profile" 
                    width={500} 
                    height={300} 
                    className={Style.sliderCard_box_img_img}
                    style={{ objectFit: "cover" }}
                />
            </motion.div>
            <div className={Style.sliderCard_box_title}>
                <p>Video #192</p>
                <div className={Style.sliderCard_box_title_like}>
                 
                    <small>1 of 1000</small>
                </div>
            </div>

            <div className={Style.sliderCard_box_price}>
                <div className={Style.sliderCard_box_price_box}>
                    <small>Current bid</small>
                    <p>0.4 ETH</p>
                </div>

                <div className={Style.sliderCard_box_price_time}>
                    <small>remaining time</small>
                    <p>2h : 39m : 34s</p>
                </div>
            </div> 
        </div>
    </motion.div>
  ); 
};

>>>>>>> 674d4a54a7dc505c024906120914baea6c464f08
export default SliderCard;