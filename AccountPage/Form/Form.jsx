import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import { 
    TiSocialFacebook, 
    TiSocialTwitter, 
    TiSocialInstagram,
} from "react-icons/ti";

import Style from "./form.module.css";
import { Button } from "../../components/componentindex";

const Form = () => {
  return (
    <div className={Style.form}>
        <div className={Style.form_box}>
            <form>
                <div className={Style.form_box_input}>
                    <label htmlFor="name">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="Ange J"
                        className={Style.form_box_input_userName}
                    />
                </div>

                <div className={Style.form_box_input}>
                    <label htmlFor="emai">Email</label>
                    <div className={Style.form_box_input_box}>
                        <div className={Style.form_box_input_box_icon}>
                            <HiOutlineMail />
                        </div>
                        <input type="text" placeholder="email*" />
                    </div>
                </div>

                <div className={Style.form_box_input}>
                    <label htmlFor="description">Message</label>
                    <textarea 
                        name="" 
                        id=""
                        cols="30"
                        rows="6"
                        placeholder="Bio"
                    ></textarea>
                </div>

                <div className={Style.form_box_input}>
                    <label htmlFor="website">Website</label>
                    <div className={Style.form_box_input_box}>
                        <div className={Style.form_box_input_box_icon}>
                            <MdOutlineHttp />
                        </div>
                        <input type="text" placeholder="website" />
                    </div>
                </div>

                <div className={Style.form_box_input_social}>
                    <div className={Style.form_box_input}>
                        <label htmlFor="facebook">Facebook</label>
                            <div className={Style.form_box_input_box}>
                                <div className={Style.form_box_input_box_icon}>
                                    <TiSocialFacebook />
                                </div>
                                <input type="text" placeholder="hhtps://angej" />
                            </div>
                    </div>
                    <div className={Style.form_box_input}>
                        <label htmlFor="Twitter">Twitter</label>
                            <div className={Style.form_box_input_box}>
                                <div className={Style.form_box_input_box_icon}>
                                    <TiSocialTwitter />
                                </div>
                                <input type="text" placeholder="hhtps://angej" />
                            </div>
                    </div>
                    <div className={Style.form_box_input}>
                        <label htmlFor="Instagram">Instagram</label>
                            <div className={Style.form_box_input_box}>
                                <div className={Style.form_box_input_box_icon}>
                                    <TiSocialInstagram />
                                </div>
                                <input type="text" placeholder="hhtps://angej" />
                            </div>
                    </div>
                </div>

                <div className={Style.form_box_input}>
                    <label htmlFor="wallet">Wallet address</label>
                    <div className={Style.form_box_input_box}>
                        <div className={Style.form_box_input_box_icon}>
                            <MdOutlineHttp />
                        </div>
                        <input type="text" placeholder="0x3Ehee767gfuGF8T5Rcvi8" />
                        <div className={Style.form_box_input_box_icon}>
                            <MdOutlineContentCopy />
                        </div>
                    </div>
                </div>

                <div className={Style.form_box_btn}>
                    <Button 
                        btnName="Upload profile" 
                        handleClick={() => {}}
                        classStyle={Style.button}
                    />
                </div>
            </form>
        </div>
    </div>
  );
};

export default Form;