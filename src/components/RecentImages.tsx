import React from 'react';
import { Images, PropsPrependImage } from './Images';

export const RecentImages: React.FC<PropsPrependImage> = (props) => {
  return (
    <>
      <h2>Recent Images</h2>
      <Images {...props} />
    </>
  )
}