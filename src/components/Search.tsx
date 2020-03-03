import React, { useState, useEffect, useCallback } from 'react';
import { Input, Button } from 'antd';
import debounceParent from 'lodash.debounce';
import querystring from "querystring";
import { GiphyFetch, GifsResult } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { Images, Props } from './Images';
import { PAGINATION_LIMIT } from '../constants';

const { Search: SearchInput } = Input;

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY ?? '')

const debounce = debounceParent((fn: () => void) => {
  fn();
}, 500);

const fetchGifs = async (
  query: string,
  offset: number,
  appendOrSetGifs: (result: GifsResult) => void,
) => {
  if (!query.length) {
    return;
  }

  const results = await gf.search(query, { offset, limit: PAGINATION_LIMIT });
  appendOrSetGifs(results);
}

function useQueryStringAndLocalStorage(params: querystring.ParsedUrlQuery, key: string): [string, (newValue: string) => void] {
  const paramsArrayValue = params[key];
  const paramsValue = Array.isArray(paramsArrayValue) ? paramsArrayValue.join(' ') : paramsArrayValue;
  const defaultValue = paramsValue ?? localStorage.getItem(key);

  const [value, setValue] = useState(defaultValue);
  const setLocalStorageState = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
    params[key] = newValue;
    window.history.pushState(
      { content: newValue },
      '',
      '?' + querystring.stringify(params),
    );
  }
  return [value, setLocalStorageState];
}

export const Search: React.FC<Props> = (props) => {
  const [params] = useState(() => {
    return querystring.parse(window.location.search.substr(1));
  });
  const [query, setQuery] = useQueryStringAndLocalStorage(params, 'query');
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
    fetchGifs(query, offset, appendOrSetGifs);
    // adding `appendOrSetGifs` messes things up
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, offset]);

  const setQueryCallback = useCallback((newQuery: string) => {
    const trimmedQuery = newQuery.trim();
    if (trimmedQuery !== query) {
      setOffset(0);
      setQuery(trimmedQuery);
    }
  }, [query, setQuery]);

  return (
    <>
      <h2>Search</h2>
      <SearchInput
        placeholder="Search"
        enterButton="Search"
        size="large"
        defaultValue={query}
        onChange={(event) => {
          const value = event.target.value;
          debounce(() => setQueryCallback(value))
        }}
        onSearch={(value: string) => debounce(() => setQueryCallback(value))}
      />
      <Images images={gifs} {...props} />
      {offset < totalCount 
        ? <Button onClick={() => setOffset(offset + PAGINATION_LIMIT)}>Load More</Button>
        : null}
    </>
  )
}