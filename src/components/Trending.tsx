import React, { useState, useEffect } from 'react';
import { GiphyFetch, GifsResult } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { Images, Props } from './Images';
import { PAGINATION_LIMIT } from '../constants';
import { Button } from 'antd';

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY ?? '');

const fetchTrending = async (
  offset: number,
  appendOrSetGifs: (result: GifsResult) => void,
) => {
  const results = await gf.trending({ offset, limit: PAGINATION_LIMIT });
  appendOrSetGifs(results);
}

export const Trending: React.FC<Props> = (props) => {
  const [gifs, setGifs] = useState<IGif[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [offset, setOffset] = useState(0);

  const appendOrSetGifs = (result: GifsResult) => {
    if (offset === 0) {
      setGifs(result.data);
    } else {
      setGifs([...gifs, ...result.data]);
    }
    setTotalCount(result.pagination.total_count);
  };

  useEffect(() => {
    fetchTrending(offset, appendOrSetGifs);
    // adding `appendOrSetGifs` messes things up
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return (
    <>
      <h2>Trending</h2>
      <Images images={gifs} {...props} />
      {offset < totalCount
        ? <Button onClick={() => setOffset(offset + PAGINATION_LIMIT)}>Load More</Button>
        : null}
    </>
  )
}