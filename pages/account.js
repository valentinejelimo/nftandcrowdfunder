import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";

import { useDropzone } from "react-dropzone";

import Style from "../styles/account.module.css";
import images from "../images";
import Form from "../AccountPage/Form/Form";

const account = () => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    setFileUrl(acceptedFile[0]);
  }, [])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  })

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile Settings</h1>
        <p>
          Set your preffered display name, 
          create your profile and other account settings
        </p>
      </div>

      <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()}/>
          <Image
            src={images.userprofile1}
            alt="account upload"
            width={150}
            height={150}
            className={Style.account_box_img_img}
          />
          <p className={Style.account_box_img_para}>Change Image</p>
        </div>
        <div className={Style.account_box_form}>
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default account;