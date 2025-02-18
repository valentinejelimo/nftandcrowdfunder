<<<<<<< HEAD
import React from "react";

import Style from "./AudioLive.module.css";
import AudioCard from "./AudioCard/AudioCard";
import AudioCardSmall from "./AudioCardSmall/AudioCardSmall";

const AudioLive = () => {
  return (
    <div className={Style.audioLive}>
      <div className={Style.audioLive_box}>
        <div className={Style.audioLive_box_left}>
          <AudioCard />
          <AudioCard />
        </div>

        <div className={Style.audioLive_box_right}>
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div> 
      </div>
    </div>
  );
};

=======
import React from "react";

import Style from "./AudioLive.module.css";
import AudioCard from "./AudioCard/AudioCard";
import AudioCardSmall from "./AudioCardSmall/AudioCardSmall";

const AudioLive = () => {
  return (
    <div className={Style.audioLive}>
      <div className={Style.audioLive_box}>
        <div className={Style.audioLive_box_left}>
          <AudioCard />
          <AudioCard />
        </div>

        <div className={Style.audioLive_box_right}>
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div> 
      </div>
    </div>
  );
};

>>>>>>> 674d4a54a7dc505c024906120914baea6c464f08
export default AudioLive;