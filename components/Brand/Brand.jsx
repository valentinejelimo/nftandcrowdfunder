<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router"; 

import Style from "./Brand.module.css";
import images from "../../images";
import Button from "../Button/Button";

const Brand = () => {
    const router = useRouter(); 
  return (
    <div className={Style.brand}>
        <div className={Style.brand_box}>
            <div className={Style.brand_box_left}>
                <Image src={images.finalogo} alt="brand logo" width={100} height={100} />
                <h1>Earn crypto with our platform</h1>
                <p>An innovative platform that inspires</p>

                <div className={Style.brand_box_left_btn}>
                    <Button btnName="Explore" handleClick={()=>  router.push("/search")} />
                </div>
            </div>
            <div className={Style.brand_box_right}>
                <Image src={images.monknft} alt="brand logo" width={800} height={600}/>
            </div>
        </div>
    </div>
  );
};

=======
import React from "react";
import Image from "next/image";

import Style from "./Brand.module.css";
import images from "../../images";
import Button from "../Button/Button";

const Brand = () => {
  return (
    <div className={Style.brand}>
        <div className={Style.brand_box}>
            <div className={Style.brand_box_left}>
                <Image src={images.logo} alt="brand logo" width={100} height={100} />
                <h1>Earn crypto with our platform</h1>
                <p>An innovative platform that inspires</p>

                <div className={Style.brand_box_left_btn}>
                    <Button btnName="Create" handleClick={()=> {}} />
                    <Button btnName="Explore" handleClick={()=> {}} />
                </div>
            </div>
            <div className={Style.brand_box_right}>
                <Image src={images.monknft} alt="brand logo" width={800} height={600}/>
            </div>
        </div>
    </div>
  );
};

>>>>>>> 674d4a54a7dc505c024906120914baea6c464f08
export default Brand;