import React from "react";
import {
    TiSocialFacebook,
    TiSocialLinkedin, 
    TiSocialTwitter, 
    TiSocialInstagram, 
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

import Style from "../styles/contactus.module.css";
import formStyle from "../AccountPage/Form/form.module.css";
import {Button} from "../components/componentindex";

const contactus = () => {
  return (
    <div className={Style.contactus}>
        <div className={Style.contactus_box}>
            <h1>Contact</h1>
            <div className={Style.contactus_box_box}>
                <div className={Style.contactus_box_box_left}>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3> ADDRESS</h3>
                        <p>hello eduios jgdgwqjsnnndhwhfwvfvvf</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3> Email</h3>
                        <p>nd.example@example.com</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>Phone</h3>
                        <p>2411257676</p>
                    </div>
                    <div className={Style.contactus_box_box_left_item}>
                        <h3>Socials</h3>
                        <a href="#"><TiSocialFacebook/></a>
                        <a href="#"><TiSocialInstagram/></a>
                        <a href="#"><TiSocialLinkedin/></a>
                        <a href="#"><TiSocialTwitter/></a>
                    </div>
                </div>
                <div className={Style.contactus_box_box_right}>
                    <form>
                        <div className={formStyle.form_box_input}>
                            <label htmlFor="name">Username</label>
                            <input 
                                type="text" 
                                placeholder="Ange J"
                                className={formStyle.form_box_input_userName}
                            />
                        </div>
                        <div className={formStyle.form_box_input}>
                            <label htmlFor="emai">Email</label>
                            <div className={formStyle.form_box_input_box}>
                                <div className={formStyle.form_box_input_box_icon}>
                                    <HiOutlineMail />
                                </div>
                                <input type="text" placeholder="email*" />
                            </div>
                        </div>
                        <div className={formStyle.form_box_input}>
                            <label htmlFor="description">Description</label>
                            <textarea 
                                name="" 
                                id=""
                                cols="30"
                                rows="6"
                                placeholder="Bio"
                            ></textarea>
                        </div>
                        <Button 
                            btnName="Send Message"
                            handleClick={() => {}}
                            classStyle={Style.button} 
                        />
                    </form>
                </div>

            </div>
        </div>
    </div>
  );
};

export default contactus;