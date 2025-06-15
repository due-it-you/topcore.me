import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import axios from '../../../../api/lib/apiClient';

export default function AlbumSearchCard() {
  const [albums, setAlbums] = useState(null);
  const [searchAlbumInput, setSearchAlbumInput] = useState(null);
  async function onSearchClick() {
    const res = await axios.get('/albums/search', { params: { name: searchAlbumInput } });
    const albums = res.data.searchedAlbums;
    setAlbums(albums);
  }

  return (
    <div className="flex h-screen w-2/5 items-center">
      <div className="mx-4 h-4/5 w-full rounded-2xl border border-[#2D2D2D] bg-[#1E1E1E] shadow-xl shadow-gray-900">
        <div className="h-full p-12">
          <SearchBar onSearchClick={onSearchClick} setSearchAlbumInput={setSearchAlbumInput} />
          <SearchResult albums={albums} />
        </div>
      </div>
    </div>
  );
}
