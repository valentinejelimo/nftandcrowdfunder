import React from "react";
import Image from "next/image";

import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentindex";
import images from "../images";

const aboutus = () => {
    const founderArray = [
        {name: "Valentine Jelimo", position: "Creator", image: images.nft1}
    ]
  return (
    <div className={Style.aboutus}>
        <div className={Style.aboutus_box}>
            <div className={Style.aboutus_box_hero}>
                <div className={Style.aboutus_box_hero_left}>
                    <h1>About Us</h1>
                    <p>
                        An independent group that create and develop different programs 
                        in blockchains this includes, dapps and web3.
                    </p>
                </div>
                <div className={Style.aboutus_box_hero_right}>
                    <Image
                        src={images.hero}
                    />
                </div>
            </div>
            <div className={Style.aboutus_box_title}>
                <h2>About Creator</h2>
                <p>
                    A student
                </p>
            </div>

            <div className={Style.aboutus_box_founder}>
                <div className={Style.aboutus_box_founder_box}>
                    {founderArray.map((el, i)=>(
                        <div className={Style.aboutus_box_founder_box_img}>
                            <Image 
                                src={el.image}
                                alt={el.name}
                                width={500}
                                height={500}
                                className={Style.aboutus_box_founder_box_img_img}
                            />
                            <h3>{el.name}</h3>
                            <p>{el.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default aboutus;