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
  handleDragStart,
  handleDragEnd,
}) {
  return (
    <div className="flex h-screen w-2/5 items-center">
      <div className="mx-4 h-4/5 w-full rounded-2xl border border-[#2D2D2D] bg-[#1E1E1E] shadow-xl shadow-gray-900">
        <div className="h-full p-12">
          <SearchBar
            onSearchClick={onSearchClick}
            setSearchAlbumInput={setSearchAlbumInput}
            activeId={activeId}
            activeAlt={activeAlt}
            activeSrc={activeSrc}
            isDragging={isDragging}
          />
          <SearchResult
            albums={albums}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        </div>
      </div>
    </div>
  );
}
