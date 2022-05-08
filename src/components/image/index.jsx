import React from "react";
import Image from "./image";

const Img = (src) => {
  return (
    // @ts-ignore
    <Image src={src.src} alt={src.alt}/>
  )
}

export default Img;

