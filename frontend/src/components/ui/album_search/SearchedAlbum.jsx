import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export default function SearchedAlbum({ src, alt, index }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${index}`,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <img src={src} alt={alt} className="aspect-square h-full w-full rounded-xl object-cover" />
      </div>
    </div>
  );
}
