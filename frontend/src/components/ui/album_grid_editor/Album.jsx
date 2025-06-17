import { useDroppable } from '@dnd-kit/core';
import AlbumImage from '../album_search/AlbumImage';

export default function Album({ id, src, alt }) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div ref={setNodeRef} className="aspect-square rounded-xl border border-white bg-[#0E1012]">
      <div>
        <AlbumImage
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
}
