import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import debounceParent from 'lodash.debounce';
import querystring from "querystring";
import { GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { Images, Props } from './Images';

const { Search: SearchInput } = Input;

const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY ?? '')

const debounce = debounceParent((fn: () => void) => {
  fn();
}, 500);

const fetchGifs = async (query: string, setGifs: (newResults: IGif[]) => void) => {
  if (!query.length) {
    return;
  }

  const results = await gf.search(query);
  setGifs(results.data);
}

function useLocalStorageState(params: querystring.ParsedUrlQuery, key: string): [string, (newValue: string) => void] {
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
  const [query, setQuery] = useLocalStorageState(params, 'query');
  const [gifs, setGifs] = useState<IGif[]>([]);

  useEffect(() => {
    fetchGifs(query, setGifs);
  }, [query]);

  return (
    <>
      <h1>Search</h1>
      <SearchInput
        placeholder="Search"
        enterButton="Search"
        size="large"
        defaultValue={query}
        onChange={(event) => {
          const value = event.target.value;
          debounce(() => setQuery(value))
        }}
        onSearch={(value: string) => debounce(() => setQuery(value))}
      />
      <Images images={gifs} {...props} />
    </>
  )
}