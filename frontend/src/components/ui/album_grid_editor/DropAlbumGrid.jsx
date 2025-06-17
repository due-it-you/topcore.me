import Album from './Album';

export default function DropAlbumGrid({ assignedAlbums }) {
  return (
    <div className="aspect-square w-100">
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {assignedAlbums.map((album) => {
          return (
            <div key={album.id}>
              <Album id={album.id} src={album.src} alt={album.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
