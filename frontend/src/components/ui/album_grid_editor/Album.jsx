import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import AlbumImage from '../album_search/AlbumImage';

export default function Album() {
  const { setNodeRef } = useDroppable({
    id: 'unique-id',
  });

  return (
    <div ref={setNodeRef} className="aspect-square rounded-xl border border-white bg-[#0E1012]">
      <div>
        <AlbumImage
          src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          alt="test"
        />
      </div>
    </div>
  );
}
