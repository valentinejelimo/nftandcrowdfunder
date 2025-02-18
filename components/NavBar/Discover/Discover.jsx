import React from "react";
import Link from "next/link";

import Style from './Discover.module.css';

const Discover = () => {
  const discover =[
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author",
      link: "author"
    },
    {
      name: "Upload NFT",
      link: "uploadnft"
    },
  ];
  return (
    <div>
      {discover.map((el, i) => (
        <div key={el.link} className={Style.discover}>
          <Link href={`/${el.link}`}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;