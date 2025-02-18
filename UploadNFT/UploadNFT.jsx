import React, { useState } from "react";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { useRouter } from "next/router";
import Style from "./UploadNFT.module.css";
import formStyle from "../AccountPage/Form/form.module.css";
import { Button } from "../components/componentindex";
import { Dropzone } from "../UploadNFT/uploadnftindex";
import NFTCardTwo from "../CollectionPage/NFTCardTwo/NFTCardTwo";

const UploadNFT = ({ uploadToIPFS, createNFT }) => {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const router = useRouter();


  return (
    <div className={Style.upload}>
      <Dropzone
        title="JPG, PNG, MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browse media"
        name={name}
        description={description}
        setImage={setImage}
        uploadToIPFS={uploadToIPFS}
      />
      <div className={Style.upload_box}>
        <div className={formStyle.form_box_input}>
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            placeholder="Ange J"
            className={formStyle.form_box_input_userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={formStyle.form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            cols="30"
            rows="6"
            placeholder="Bio"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p>The description will be included on the item details page</p>
        </div>
        <div className={formStyle.form_box_input_social}>
          <div className={formStyle.form_box_input}>
            <label htmlFor="Price">Price</label>
            <div className={formStyle.form_box_input_box}>
              <div className={formStyle.form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={Style.upload_box_btn}>
          <Button
            btnName="Upload"
            handleClick={async () => createNFT(
              name,
              price,
              image,
              description,
              router,
            )}
            classStyle={Style.upload_box_btn_style}
          />
          <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle={Style.upload_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
