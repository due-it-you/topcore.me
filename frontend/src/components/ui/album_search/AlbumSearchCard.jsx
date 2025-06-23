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
    <div className="order-2 h-screen w-full lg:order-1 lg:flex lg:w-2/5 lg:items-center">
      <div className="h-4/5 w-full rounded-xl border border-[#2D2D2D] bg-[#1E1E1E] shadow-xl shadow-gray-900 md:mx-4">
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
