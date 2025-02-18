<<<<<<< HEAD
import React, {useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../images";

const Slider = () => {

    const FollowingArray = [
        {
            background: images.creatorbg2,
            user: images.userprofile1,
        },
        {
            background: images.creatorbg2,
            user: images.userprofile2,
        },
        {
            background: images.hero,
            user: images.userprofile3,
        },
        {
            background: images.nft2,
            user: images.monknft,
        }, 
        {
            background: images.nft5,
            user: images.monkeymusic,
        },
        {
            background: images.nft4,
            user: images.userprofile2,
        },
    ];
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();

    useEffect(()=>{
        setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    });

    const handleScroll =(direction) => {
        const {current} = dragSlider;
        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
        if(direction == "left"){
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    };
  return (
    <div className={Style.slider}>
        <div className={Style.slider_box}>
            <h2>Explore NFT videos</h2>
            <div className={Style.slider_box_button}>
                <p>Click play and explore NFT videos</p>
                <div className={Style.slider_box_button_btn}>
                    <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll("left")}>
                        <TiArrowLeftThick />
                    </div>
                    <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll("right")}>
                        <TiArrowRightThick />
                    </div>
                </div>
            </div>

            <motion.div className={Style.slider_box_items} ref={dragSlider}>
                <motion.div 
                    ref={dragSlider}
                    className={Style.slider_box_item}
                    drag="x"
                    dragConstraints={{right: 0, left: -width}}
                >
                    {FollowingArray.map((el, i)=> (
                        <SliderCard key={i + 1} el={el} i={i} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </div>
  );
};

=======
import React, {useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../images";

const Slider = () => {

    const FollowingArray = [
        {
            background: images.creatorbg2,
            user: images.userprofile1,
        },
        {
            background: images.creatorbg2,
            user: images.userprofile2,
        },
        {
            background: images.hero,
            user: images.userprofile3,
        },
        {
            background: images.nft2,
            user: images.monknft,
        }, 
        {
            background: images.nft5,
            user: images.monkeymusic,
        },
        {
            background: images.nft4,
            user: images.userprofile2,
        },
    ];
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();

    useEffect(()=>{
        setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    });

    const handleScroll =(direction) => {
        const {current} = dragSlider;
        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
        if(direction == "left"){
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    };
  return (
    <div className={Style.slider}>
        <div className={Style.slider_box}>
            <h2>Explore NFT videos</h2>
            <div className={Style.slider_box_button}>
                <p>Click play and explore NFT videos</p>
                <div className={Style.slider_box_button_btn}>
                    <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll("left")}>
                        <TiArrowLeftThick />
                    </div>
                    <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll("right")}>
                        <TiArrowRightThick />
                    </div>
                </div>
            </div>

            <motion.div className={Style.slider_box_items} ref={dragSlider}>
                <motion.div 
                    ref={dragSlider}
                    className={Style.slider_box_item}
                    drag="x"
                    dragConstraints={{right: 0, left: -width}}
                >
                    {FollowingArray.map((el, i)=> (
                        <SliderCard key={i + 1} el={el} i={i} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </div>
  );
};

>>>>>>> 674d4a54a7dc505c024906120914baea6c464f08
export default Slider;