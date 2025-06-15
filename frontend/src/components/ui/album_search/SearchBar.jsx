import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from '../../../../api/lib/apiClient';
import SearchedAlbum from './SearchedAlbum';

export default function SearchBar() {
  const [albums, setAlbums] = useState(null);

  async function onSearchClick() {
    const res = await axios.get('/albums/search');
    const albums = res.data.searchedAlbums;
    setAlbums(albums);
  }
  return (
    <div className="mb-4 flex items-center justify-center">
      <Input
        className="w-3/4 bg-[#252A30] text-[#C4C6C9]"
        placeholder="検索したいアルバムを入力してください"
      />
      <Button
        onClick={onSearchClick}
        variant="secondary"
        size="icon"
        className="mx-2 size-10 border border-gray-200 bg-[#252A30] hover:bg-[#1E2328]"
      >
        🔍
      </Button>
      <div>
        {albums
          ? albums.map((album) => {
              return (
                <div key={album.spotifyId}>
                  <SearchedAlbum src={album.imageUrl} alt={album.name} />
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
}
