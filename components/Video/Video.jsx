<<<<<<< HEAD
import React from "react";
import Image from "next/image";

import Style from "./Video.module.css";
import images from "../../images";

const Video = () => {
  return (
    <div className={Style.video}>
        <div className={Style.video_box}>
            <h1>
                Videos
            </h1>
            <p>Explore the videos on our platform about different topics</p>
            <div className={Style.video_box_frame}>
                <div className={Style.video_box_frame_left}>
                    <Image 
                        src={images.hero}
                        alt="video image"
                        width={1000}
                        height={600}
                        className={Style.video_box_frame_left_img}
                    />
                </div>

                <div className={Style.video_box_frame_right}>
                    hh
                </div>
            </div>
        </div>
    </div> 
  );
};
 
=======
import React from "react";
import Image from "next/image";

import Style from "./Video.module.css";
import images from "../../images";

const Video = () => {
  return (
    <div className={Style.video}>
        <div className={Style.video_box}>
            <h1>
                Videos
            </h1>
            <p>Explore the videos on our platform about different topics</p>
            <div className={Style.video_box_frame}>
                <div className={Style.video_box_frame_left}>
                    <Image 
                        src={images.hero}
                        alt="video image"
                        width={700}
                        height={800}
                        className={Style.video_box_frame_left_img}
                    />
                </div>

                <div className={Style.video_box_frame_right}>
                    hh
                </div>
            </div>
        </div>
    </div> 
  );
};

>>>>>>> 674d4a54a7dc505c024906120914baea6c464f08
export default Video;