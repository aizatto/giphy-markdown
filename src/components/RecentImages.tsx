import React from 'react';
import { Images, PropsPrependImage } from './Images';

export const RecentImages: React.FC<PropsPrependImage> = (props) => {
  const { images } = props;

  return (
    <>
      <h1>Recent Images</h1>
      <Images images={images} />
    </>
  )
}