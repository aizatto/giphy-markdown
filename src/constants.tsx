export enum ImageSize {
  FIXED_WIDTH= 'fixed_width',
  FIXED_WIDTH_DOWNSAMPLED = 'fixed_width_downsampled',
  ORIGINAL = 'original',
}

export enum ImageFormat {
  URL = 'url',
  // MP4 = 'mp4', // only available on `downsized_small`, and `looping`
  WEBP = 'webp', // only available on 'downsampled' formats
}

export const PAGINATION_LIMIT = 24;