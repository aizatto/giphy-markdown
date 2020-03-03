import React from 'react';
import { IGif } from '@giphy/js-types';
import copy from 'copy-to-clipboard';
import { message } from 'antd';
import { ImageSize, ImageFormat } from '../constants';

export type Props = {
  imageSize?: ImageSize,
  imageFormat?: ImageFormat,
  prependRecentImage?: (newImages: IGif) => void,
}

export type PropsPrependImage = {
  images: IGif[],
  imageSize?: ImageSize,
  imageFormat?: ImageFormat,
  prependRecentImage?: (newImages: IGif) => void,
}

function smallestPreview(gif: IGif) {
  const image = gif.images.fixed_width_downsampled;

  const fixed_width_downsampled_gif = parseInt(image.size ?? "10000000000000");
  const fixed_width_downsampled_webp = parseInt(image.webp_size);

  if (fixed_width_downsampled_gif < fixed_width_downsampled_webp) {
    return gif.images.fixed_width.url;
  }

  return gif.images.fixed_width.webp;
}

function availableFormat(gif: IGif, size: ImageSize, format: ImageFormat) {
  switch (format) {
    case ImageFormat.WEBP: {
      return gif.images[size][format];
    }

    case ImageFormat.URL:
      return gif.images[size].url;
  }
}

export const Images: React.FC<PropsPrependImage> = (props) => {
  const imageSize: ImageSize = props.imageSize ?? ImageSize.FIXED_WIDTH;
  const imageFormat: ImageFormat = props.imageFormat ?? ImageFormat.URL;

  const elements = props.images.map(gif => {
    const srcPreview = smallestPreview(gif);
    const src = availableFormat(gif, imageSize, imageFormat);

    return (
      <img
        key={gif.id}
        src={srcPreview}
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
    <div style={{marginBottom: '2rem'}}>
      {elements}
    </div>
  )
}