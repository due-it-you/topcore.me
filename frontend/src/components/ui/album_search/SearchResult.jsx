import AlbumImage from './AlbumImage';
import Draggable from '../dnd/Draggable';
import { useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';

export default function SearchResult({ albums }) {
  const [activeId, setActiveId] = useState(null);
  const [activeSrc, setActiveSrc] = useState(null);
  const [activeAlt, setActiveAlt] = useState(null);
  function handleDragStart(event) {
    setActiveId(event.active.id);
    setActiveSrc(albums[event.active.id].imageUrl);
    setActiveAlt(albums[event.active.id].name);
  }
  function handleDragEnd() {
    setActiveId(null);
  }
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
        {activeId ? (
          <div key={activeId}>
            <AlbumImage src={activeSrc} alt={activeAlt} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
