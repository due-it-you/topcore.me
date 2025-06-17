import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

export default function AlbumSearchCard({
  onSearchClick,
  setSearchAlbumInput,
  albums,
  activeId,
  activeAlt,
  activeSrc,
  isDragging,
}) {
  return (
    <div className="flex h-screen w-2/5 items-center">
      <div className="mx-4 h-4/5 w-full rounded-xl border border-[#2D2D2D] bg-[#1E1E1E] shadow-xl shadow-gray-900">
        <div className="h-full p-12">
          <SearchBar onSearchClick={onSearchClick} setSearchAlbumInput={setSearchAlbumInput} />
          <SearchResult
            activeId={activeId}
            isDragging={isDragging}
            activeAlt={activeAlt}
            activeSrc={activeSrc}
            albums={albums}
          />
        </div>
      </div>
    </div>
  );
}
