import React, {useState, useEffect} from "react";
import { RiUserFollowFill, RiUserUnfollowFill, RiAwardLine} from "react-icons/ri";

import Style from "./FolowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import images from "../../images";

const FollowerTab = () => {
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
    const FollowingArray = [
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
    const NewsArray = [
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

    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const openPopular = ()=>{ 
        if(!popular){
            setPopular(true);
            setFollowing(false);
            setNews(false);
        }
    };

    const openFolowers = ()=>{
        if(!following){
            setPopular(false);
            setFollowing(true);
            setNews(false);
        }
    };

    const openNews = ()=>{
        if(!news){
            setPopular(false);
            setFollowing(false);
            setNews(true);
        }
    };
  return (
    <div className={Style.followerTab}>
        <div className={Style.followerTab_title}>
            <h2> Top Creators List..</h2>
            <div className={Style.followerTab_tabs}>
                <div className={Style.followerTab_tabs_btn}>
                    <button onClick={()=> openPopular()} className={Style.followerTab_tabs_btn_btn}>
                        <RiUserFollowFill /> Popular
                    </button>
                    <button onClick={()=> openFolowers()} className={Style.followerTab_tabs_btn_btn}>
                        <RiUserFollowFill /> Following
                    </button>
                    <button onClick={()=> openNews()} className={Style.followerTab_tabs_btn_btn}>
                        <RiAwardLine /> News
                    </button>
                </div>
            </div>
        </div>
        {popular && (
            <div className={Style.followerTab_box}>
                {CardArray.map((el, i)=> (
                    <FollowerTabCard key={i + 1} i={i} el={el} />
                ))}
            </div>
        )}

         {following && (
            <div className={Style.followerTab_box}>
                {FollowingArray.map((el, i)=> (
                    <FollowerTabCard key={i + 1} i={i} el={el} />
                ))}
            </div>
        )}

        
         {news && (
            <div className={Style.followerTab_box}>
                {NewsArray.map((el, i)=> (
                    <FollowerTabCard key={i + 1} i={i} el={el} />
                ))}
            </div>
        )}

        <div className={Style.followerTab_member}>
            <div className={Style.followerTab_member_box}>
                <a href="#">Show more</a>
                <a href="#">Become an author</a>
            </div>
        </div>
    </div>
  );
};

export default FollowerTab;