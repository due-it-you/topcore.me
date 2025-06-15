import SearchedAlbum from './SearchedAlbum';

export default function SearchResult({ albums }) {
  return (
    <div className="h-7/8 overflow-y-scroll">
      <div className="grid grid-cols-3 gap-1">
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
