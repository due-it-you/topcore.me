import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import AlbumImage from '../album_search/AlbumImage';

export default function Album({ id, src, alt }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="aspect-square rounded-xl border border-white bg-[#0E1012]">
      <div>
        <AlbumImage src={src} alt={alt} />
      </div>
    </div>
  );
}
