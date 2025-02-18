import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";


import Style from "../styles/reselltoken.module.css";
import formStyle from "../AccountPage/Form/form.module.css";
import { Button } from "../components/componentindex";

 
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const reselltoken = () => {
  const {createSale} = useContext(NFTMarketplaceContext);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();
  const {id, tokenURI} = router.query;

  const fetchNFT = async()=> {
    if(!tokenURI) return;
    const { data } = await axios.get(tokenURI);

    setImage(data.image);
  };
  useEffect(()=>{
    fetchNFT();
  }, [id]);

  const resell = async()=> {
    try {
      console.log("Reselling NFT with price:", price);
      await createSale(tokenURI, price, true, id);
      router.push("/author");
    } catch (error) {
      console.log("Error while reselling", error);
    }
  };
  return (
    <div className={formStyle.reselltoken}>
      <div className={Style.reselltoken_box}>
        <h1>Resell your NFT</h1>
        <div className={formStyle.form_box_input}>
          <label htmlFor="name">price</label>
          <input 
            type="number" 
            placeholder="Resell price"
            className={formStyle.form_box_input_userName}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={Style.reselltoken_box_image}>
          {
            image && (
              <Image src={image} alt="resell nft" width={400} height={400}/>
            )
          }
        </div>

        <div className={Style.reselltoken_box_btn}>
          <Button btnName="Resell Nft" handleClick={resell} />
        </div>
      </div>
    </div>
  );
};

export default reselltoken;