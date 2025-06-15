import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import axios from '../../../../api/lib/apiClient';

export default function AlbumSearchCard() {
  const [albums, setAlbums] = useState(null);
  async function onSearchClick() {
    const res = await axios.get('/albums/search');
    const albums = res.data.searchedAlbums;
    setAlbums(albums);
  }

  return (
    <div className="flex h-screen w-2/5 items-center">
      <div className="mx-4 h-4/5 w-full rounded-2xl bg-[#151A1E] shadow-2xl">
        <div className="h-full p-12">
          <SearchBar onSearchClick={onSearchClick} />
          <SearchResult albums={albums} />
        </div>
      </div>
    </div>
  );
}
