import React, { useState, useEffect } from "react";
import { BsFillAlarmFill, BsFillCalendarDateFill, BsCalendar3 } from "react-icons/bs";

import Style from "./Collection.module.css";
import DaysComponent from "./DaysComponents/DaysComponents";
import images from "../../images";

const Collection = () => {
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const CardArray = [
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
    const newsArray = [
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
    ];
    const followingArray = [
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
    ];

    const openPopular = () => {
      if (!popular) {
        setPopular(true);
        setFollowing(false);
        setNews(false)
      }
    };

    
    const openFollower = () => {
      if (!following) {
        setPopular(false);
        setFollowing(true);
        setNews(false)
      }
    };

    
    const openNews = () => {
      if (!news) {
        setPopular(false);
        setFollowing(false);
        setNews(true)
      }
    };
    
  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List of creators</h2>
        <div className={Style.collecton_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={()=> openPopular()}>
              <BsFillAlarmFill /> 24hrs
            </button>
            <button onClick={()=> openFollower()}>
              <BsCalendar3 /> 7days
            </button>
            <button onClick={()=> openNews()}>
              <BsFillCalendarDateFill /> 30days
            </button>
          </div>
        </div>
      </div>
      {
        popular && (
          <div className={Style.collection_box}>
            {
              CardArray.map((el, i)=> (
                <DaysComponent key={ i + 1} i={i} el={el}/>
              ))
            }
          </div>
        )
      }
      {
        following && (
          <div className={Style.collection_box}>
            {
              followingArray.map((el, i)=> (
                <DaysComponent key={ i + 1} i={i} el={el}/>
              ))
            }
            
          </div>
        )
      }
      {
        news && (
          <div className={Style.collection_box}>
            {
              newsArray.map((el, i)=> (
                <DaysComponent key={ i + 1} i={i} el={el}/>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default Collection;