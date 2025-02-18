<<<<<<< HEAD
import React from "react";
import Image from "next/image";

import Style from "./LikeProfile.module.css";
import images from "../../images";

const LikeProfile = () => {
    const imageArray = [images.userprofile1, images.userprofile2, images.userprofile3, images.hero]
  return (
    <div className={Style.like}>
        {imageArray.map((el, i)=> (
            <div className={Style.like_box} key={i + 1}>
                <Image 
                  src={el} 
                  width={15} 
                  height={15} 
                  key={i + 1} 
                  className={Style.like_box_img}
                />
            </div>
        ))}
    </div>
  );
};

=======
import React from "react";
import Image from "next/image";

import Style from "./LikeProfile.module.css";
import images from "../../images";

const LikeProfile = () => {
    const imageArray = [images.userprofile1, images.userprofile2, images.userprofile3, images.hero]
  return (
    <div className={Style.like}>
        {imageArray.map((el, i)=> (
            <div className={Style.like_box} key={i + 1}>
                <Image 
                  src={el} 
                  width={15} 
                  height={15} 
                  key={i + 1} 
                  className={Style.like_box_img}
                />
            </div>
        ))}
    </div>
  );
};

>>>>>>> 674d4a54a7dc505c024906120914baea6c464f08
export default LikeProfile;