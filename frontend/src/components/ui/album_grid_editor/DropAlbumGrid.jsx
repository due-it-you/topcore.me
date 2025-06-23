import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import Album from './Album';

export default function DropAlbumGrid({ assignedAlbums }) {
  return (
    <div className="aspect-square w-60 lg:w-100">
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <SortableContext items={assignedAlbums.map((a) => a.id)} strategy={rectSortingStrategy}>
          {assignedAlbums.map((album) => {
            return (
              <div key={album.id}>
                <Album id={album.id} src={album.src} alt={album.alt} spotifyId={album.spotifyId} />
              </div>
            );
          })}
        </SortableContext>
      </div>
    </div>
  );
}
