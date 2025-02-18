import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import Style from "./DropZone.module.css";
import images from "../../images";

const Dropzone = ({
  title,
  heading,
  subHeading,
  name,
  description,
  uploadToIPFS,
  setImage,
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    const url = await uploadToIPFS(acceptedFiles[0]);
    setFileUrl(url);
    setImage(url);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div className={Style.dropzone}>
      <div className={Style.dropzone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.dropzone_box_input}>
          <p>{title}</p>
          <div className={Style.dropzone_box_input_img}>
            <Image
              src={images.upload} 
              alt="upload"
              width={100}
              height={100}
              objectFit="contain"
              className={Style.dropzone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>
      {fileUrl && (
        <aside className={Style.dropzone_box_aside}>
          <div className={Style.dropzone_box_aside_box}>
            <Image
              src={fileUrl}
              alt="nft image"
              width={200}
              height={200}
            />
            <div className={Style.dropzone_box_aside_box_preview}>
              <div className={Style.dropzone_box_aside_box_preview_one}>
                <p>
                  <samp>NFT NAME: </samp>
                  {name || ""}
                </p>
              </div>
              <div className={Style.dropzone_box_aside_box_preview_two}>
                <p>
                  <span>Description</span>
                  {description || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Dropzone;
