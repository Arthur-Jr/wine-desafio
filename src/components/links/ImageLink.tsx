import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { ImageLinkWrapper } from '../links/style';

interface props {
  alt: string,
  path: string,
  image: StaticImageData,
  width: number,
  height: number,
}

function ImageLink({ alt, path, image, width, height }: props) {
  return (
    <Link href={path} passHref>
      <ImageLinkWrapper>
        <Image src={image} alt={alt} width={width} height={height}/>
      </ImageLinkWrapper>
    </Link>
  );
}

export default ImageLink;
