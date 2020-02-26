import React, { useState } from 'react';
import './App.css';
import { Search } from './components/Search';
import { Trending } from './components/Trending';
import { IGif } from '@giphy/js-types';
import { RecentImages } from './components/RecentImages';

function useLocalStorageState(key: string): [IGif[], (newValue: IGif[]) => void] {
  const defaultValue = localStorage.getItem(key);
  const jsonValue = defaultValue ? JSON.parse(defaultValue) : [];

  const [value, setValue] = useState<IGif[]>(jsonValue);
  const setLocalStorageState = (newValue: IGif[]) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }
  return [value, setLocalStorageState];
}

function App() {
  const [recentImages, setRecentImages] = useLocalStorageState('recentImages');
  const prependRecentImage = (gif: IGif) => {
    setRecentImages([gif, ...recentImages]);
  }

  return (
    <div className="App">
      <RecentImages images={recentImages} prependRecentImage={prependRecentImage} />
      <Trending prependRecentImage={prependRecentImage} />
      <Search prependRecentImage={prependRecentImage} />
      <div>
        Powered by Giphy
      </div>
      <ul>
        <li><a href="https://www.npmjs.com/package/@giphy/js-fetch-api">@giphy/js-fetch-api</a></li>
        <li><a href="https://giphy.com/">https://giphy.com/</a></li>
        <li><a href="https://developers.giphy.com/">https://developers.giphy.com/</a></li>
        <li><a href="https://www.github.com/aizatto/giphy-markdown/">GitHub</a></li>
      </ul>
    </div>
  );
}

export default App;
