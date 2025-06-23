import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import AlbumImage from '../album_search/AlbumImage';

export default function Album({ id, src, alt, spotifyId }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
    touchAction: 'none',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="aspect-square rounded-xl bg-[#0E1012]"
    >
      <div>
        <AlbumImage src={src} alt={alt} spotifyId={spotifyId} />
      </div>
    </div>
  );
}
