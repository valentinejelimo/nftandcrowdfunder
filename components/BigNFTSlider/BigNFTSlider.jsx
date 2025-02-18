import React, {useState, useEffect, useCallback} from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, Aioutlinee } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import { useRouter } from "next/router";

import Style from "./BigNFTSlider.module.css";
import images from "../../images";
import Button from "../Button/Button";

const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1);
    const router = useRouter(); 

    const sliderData = [
        {
            title: "NFT samples",
            id: 1,
            name: "Connect and create your own",
            price: "Set your own ETH price",
            nftImage: images.nft1,
        },
        {
            title: "NFT Samples",
            id: 2,
            name: "Connect and create your own",
            price: "Set your own ETH price",
            nftImage: images.nft2,
        },
        {
            title: "NFT samples",
            id: 3,
            name: "Connect and create your own ",
            price: "Set your own ETH price",
            nftImage: images.nft3,
        }
    ];

    const inc = useCallback(() => {
        if (idNumber +1 < sliderData.length){
        setIdNumber(idNumber + 1);
        }
    }, [idNumber, sliderData.length]);

    const dec = useCallback(() => {
        if (idNumber > 0){
        setIdNumber(idNumber - 1);
        }
    }, [idNumber]);

    return (
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                                <p>Join our creators</p>
                                <h4>
                                    {sliderData[idNumber].name}{" "}
                                </h4>
                            </div>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                <h4>{sliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Price</small>
                            <p>{sliderData[idNumber].price}</p>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_button}>
                            <Button btnName="Create" handleClick={() => router.push("/uploadnft") }/>
                            <Button btnName="Explore" handleClick={() => router.push("/search")} />
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines
                            className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                            onClick={() => dec()}
                        />
                        <TbArrowBigRightLine
                            className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                            onClick={() => inc()}
                        />
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <Image src={sliderData[idNumber].nftImage} alt="NFT IMAGE" className={Style.bigNFTSlider_box_right_box_img}/>

                        <div className={Style.bigNFTSlider_box_right_box_like}>
                            <AiFillHeart />
                            <span>{sliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigNFTSlider;