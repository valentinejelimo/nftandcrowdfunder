import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Style from "./HeroSection.module.css";
import {Button} from "../componentindex";
import images from "../../images";

const HeroSection = () => {
    const router = useRouter(); 
    return (
        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                <div className={Style.heroSection_box_left}>
                    <h1>Welcome to Tineev create campaigns and nfts.
                         </h1>
                    <p>
                        Create a campaign to fund your business.
                         Create your NFTs and sell them on our platform.
                    </p>
                </div>
                <div className={Style.heroSection_box_right}>
                    <Image 
                        src={images.hero} 
                        alt="Hero section"
                        width={600}
                        height={600}
                        className={Style.heroSection_box_right_img}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;