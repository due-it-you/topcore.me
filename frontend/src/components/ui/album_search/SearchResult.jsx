import AlbumImage from './AlbumImage';
import Draggable from '../dnd/Draggable';
import { DragOverlay } from '@dnd-kit/core';

export default function SearchResult({ albums, isDragging, activeId, activeAlt, activeSrc, activeSpotifyId }) {
  return (
    <>
      <div className="h-7/8 overflow-y-scroll">
        <div className="grid grid-cols-3 gap-1">
          {albums
            ? albums.map((album, index) => {
                return (
                  <div key={album.spotifyId} className="touch-none">
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
            <AlbumImage src={activeSrc} alt={activeAlt} spotifyId={activeSpotifyId} />
          </div>
        ) : null}
      </DragOverlay>
    </>
  );
}
