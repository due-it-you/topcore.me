import { useState } from 'react';
import axios from './../../../api/lib/apiClient';
import { DndContext } from '@dnd-kit/core';
import AlbumSearchCard from '../ui/album_search/AlbumSearchCard';
import AlbumGridEditor from '../ui/album_grid_editor/AlbumGridEditor';

export default function CreateGridBody() {
  const [activeId, setActiveId] = useState(null);
  const [activeSrc, setActiveSrc] = useState(null);
  const [activeAlt, setActiveAlt] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [albums, setAlbums] = useState(null);
  const [searchAlbumInput, setSearchAlbumInput] = useState(null);
  async function onSearchClick() {
    const res = await axios.get('/albums/search', { params: { name: searchAlbumInput } });
    const albums = res.data.searchedAlbums;
    setAlbums(albums);
  }
  function handleDragStart(event) {
    setIsDragging(true);
    setActiveId(event.active.id);
    setActiveSrc(albums[event.active.id].imageUrl);
    setActiveAlt(albums[event.active.id].name);
  }
  function handleDragEnd() {
    setIsDragging(false);
    setActiveId(null);
  }
  return (
    <>
      <div className="flex px-16">
        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onSearchClick={onSearchClick}
          setSearchAlbumInput={setSearchAlbumInput}
        >
          <AlbumSearchCard
            albums={albums}
            activeId={activeId}
            activeAlt={activeAlt}
            activeSrc={activeSrc}
            isDragging={isDragging}
          />
          <AlbumGridEditor />
        </DndContext>
      </div>
    </>
  );
}
