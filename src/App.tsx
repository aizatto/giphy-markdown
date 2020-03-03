import React, { useState } from 'react';
import './App.css';
import { Search } from './components/Search';
import { Trending } from './components/Trending';
import { IGif } from '@giphy/js-types';
import { RecentImages } from './components/RecentImages';
import { Select } from 'antd';
import { ImageSize, ImageFormat } from './constants';
const { Option } = Select;

function useLocalStorageState<T>(key: string, defaultValue: T): [T, (newValue: T) => void] {
  const localStorageValue = localStorage.getItem(key);
  const jsonValue: T = localStorageValue ? JSON.parse(localStorageValue) : defaultValue;

  const [value, setValue] = useState<T>(jsonValue);
  const setLocalStorageState = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }
  return [value, setLocalStorageState];
}

function App() {
  const [imageSize, setImageSize] = useLocalStorageState('imageSize', ImageSize.FIXED_WIDTH);
  const [imageFormat, setImageFormat] = useLocalStorageState('imageFormat', ImageFormat.URL);
  const [recentImages, setRecentImages] = useLocalStorageState<IGif[]>('recentImages', []);
  const prependRecentImage = (gif: IGif) => {
    setRecentImages([gif, ...recentImages]);
  }

  return (
    <div className="App">
      <h1>Copy From Giphy</h1>
      <p>
        Instructions: Click on an image to copy the markdown to your clipboard.
      </p>
      Copy:
      <Select
        style={{width: 200}}
        defaultValue={imageSize}
        onChange={(value: ImageSize) => setImageSize(value)}>
        <Option value={ImageSize.FIXED_WIDTH}>{ImageSize.FIXED_WIDTH}</Option>
        <Option value={ImageSize.ORIGINAL}>{ImageSize.ORIGINAL}</Option>
      </Select>
      <Select
        style={{width: 200}}
        defaultValue={imageFormat}
        onChange={(value: ImageFormat) => setImageFormat(value)}>
        <Option value={ImageFormat.URL}>{ImageFormat.URL}</Option>
        {/* <Option value={ImageFormat.MP4}>{ImageFormat.MP4}</Option> */}
        <Option value={ImageFormat.WEBP}>{ImageFormat.WEBP}</Option>
      </Select>
      <RecentImages
        images={recentImages}
        imageSize={imageSize}
        imageFormat={imageFormat}
        // prependRecentImage={prependRecentImage}
      />
      <Trending
        imageSize={imageSize}
        imageFormat={imageFormat}
        prependRecentImage={prependRecentImage}
      />
      <Search
        imageSize={imageSize}
        imageFormat={imageFormat}
        prependRecentImage={prependRecentImage}
      />
      <div>
        Powered by Giphy
      </div>
      <ul>
        <li>Previews are Downsampled</li>
        <li><a href="https://www.npmjs.com/package/@giphy/js-fetch-api">@giphy/js-fetch-api</a></li>
        <li><a href="https://giphy.com/">https://giphy.com/</a></li>
        <li><a href="https://developers.giphy.com/">https://developers.giphy.com/</a></li>
        <li><a href="https://www.github.com/aizatto/giphy-markdown/">GitHub</a></li>
      </ul>
    </div>
  );
}

export default App;
