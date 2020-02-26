import React from 'react';
import { IGif } from '@giphy/js-types';
import copy from 'copy-to-clipboard';
import { message } from 'antd';

export type Props = {
  prependRecentImage?: (newImages: IGif) => void,
}

export type PropsPrependImage = {
  images: IGif[],
  prependRecentImage?: (newImages: IGif) => void,
}

export const Images: React.FC<PropsPrependImage> = (props) => {
  const elements = props.images.map(gif => {
    const src = gif.images.fixed_width.url;

    return (
      <img
        key={gif.id}
        src={src}
        title={gif.title}
        alt={gif.title}
        onClick={() => {
          const text = `![${gif.title}](${src})`;
          copy(text);
          message.success(text);
          if (props.prependRecentImage) {
            props?.prependRecentImage(gif);
          }
        }}
        style={{cursor: 'pointer'}}
      />
    );
  });

  return (
    <>
      {elements}
    </>
  )
}