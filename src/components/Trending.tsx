import React, { useState, useEffect } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { Images, Props } from './Images';

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY ?? '');

const fetchTrending = async (setGifs: (newResults: IGif[]) => void) => {
  const results = await gf.trending();
  setGifs(results.data);
}

export const Trending: React.FC<Props> = (props) => {
  const [gifs, setGifs] = useState<IGif[]>([]);

  useEffect(() => {
    fetchTrending(setGifs);
  }, []);

  return (
    <>
      <h1>Trending</h1>
      <Images images={gifs} {...props} />
    </>
  )
}