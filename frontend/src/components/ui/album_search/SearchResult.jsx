import AlbumImage from './AlbumImage';
import Draggable from '../dnd/Draggable';
import { DndContext, DragOverlay } from '@dnd-kit/core';

export default function SearchResult({
  albums,
  isDragging,
  activeId,
  activeAlt,
  activeSrc,
  handleDragStart,
  handleDragEnd,
}) {
  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="h-7/8 overflow-y-scroll">
        <div className="grid grid-cols-3 gap-1">
          {albums
            ? albums.map((album, index) => {
                return (
                  <div key={album.spotifyId}>
                    <Draggable id={index}>
                      <AlbumImage src={album.imageUrl} alt={album.name} />
                    </Draggable>
                  </div>
                );
              })
            : ''}
        </div>
      </div>
      <DragOverlay>
        {isDragging ? (
          <div key={activeId}>
            <AlbumImage src={activeSrc} alt={activeAlt} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
