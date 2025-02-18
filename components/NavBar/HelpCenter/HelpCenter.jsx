import React from "react";
import Link from "next/link";

import Style from './HelpCenter.module.css';

const HelpCenter = () => {
  const helpcenter =[
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
  ];
  return (
    <div className={Style.box}>
      {
        helpcenter.map((el)=> (
          <div className={Style.helpCenter} key={el.link}>
            <Link href={`/${el.link}`}>{el.name}</Link>
          </div>
        ))
      }
    </div>
  );
};

export default HelpCenter;