import React from "react";
import Image from "next/image";

import Style from "./Loader.module.css";
import images from "../../images";

const Loader = () => {
  return (
    <div className={Style.loader}>
        <div className={Style.loader_box}>
            <div className={Style.loader_box_img}></div>
        </div>
    </div>
  );
};

export default Loader;