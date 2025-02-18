import React from "react";
import Image from "next/image";

import Style from "./Banner.module.css";

export const Banner = ({bannerImage}) => {
  return (
    <div className={Style.banner}>
        <div className={Style.banner_img}>
            <Image 
                src={bannerImage}
                style={{ objectFit: "cover" }}
                height={300}
                width={1600}
            />
        </div>

        <div className={Style.banner_img_mobile}>
            <Image 
                src={bannerImage}
                style={{ objectFit: "cover" }}
                height={900}
                width={800}
            />
        </div>
    </div>
  );
};

export default Banner;
