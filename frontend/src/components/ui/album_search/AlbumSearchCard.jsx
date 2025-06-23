import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

export default function AlbumSearchCard({
  onSearchClick,
  setSearchAlbumInput,
  albums,
  activeId,
  activeAlt,
  activeSrc,
  activeSpotifyId,
  isDragging,
}) {
  return (
    <div className="md:flex h-screen w-80  md:w-2/5 md:items-center">
      <div className="md:mx-4 h-4/5 w-full rounded-xl border border-[#2D2D2D] bg-[#1E1E1E] shadow-xl shadow-gray-900">
        <div className="h-full p-12">
          <SearchBar onSearchClick={onSearchClick} setSearchAlbumInput={setSearchAlbumInput} />
          <SearchResult
            activeId={activeId}
            isDragging={isDragging}
            activeAlt={activeAlt}
            activeSrc={activeSrc}
            activeSpotifyId={activeSpotifyId}
            albums={albums}
          />
        </div>
      </div>
    </div>
  );
}
