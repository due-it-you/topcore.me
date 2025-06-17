import { useState } from 'react';
import axios from './../../../api/lib/apiClient';
import { DndContext } from '@dnd-kit/core';
import AlbumSearchCard from '../ui/album_search/AlbumSearchCard';
import AlbumGridEditor from '../ui/album_grid_editor/AlbumGridEditor';

export default function CreateGridBody() {
  // ドラッグしている対象の状態管理
  const [activeId, setActiveId] = useState(null);
  const [activeSrc, setActiveSrc] = useState(null);
  const [activeAlt, setActiveAlt] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  // 検索機能における状態管理
  const [albums, setAlbums] = useState(null);
  const [searchAlbumInput, setSearchAlbumInput] = useState(null);
  // グリッドのマスの状態管理
  const [assignedAlbums, setAssignedAlbums] = useState({
    'cell-0': { src: null, alt: null },
    'cell-1': { src: null, alt: null },
    'cell-2': { src: null, alt: null },
    'cell-3': { src: null, alt: null },
    'cell-4': { src: null, alt: null },
    'cell-5': { src: null, alt: null },
    'cell-6': { src: null, alt: null },
    'cell-7': { src: null, alt: null },
    'cell-8': { src: null, alt: null },
  });

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
  function handleDragEnd(event) {
    setIsDragging(false);
    setActiveId(null);
    const { over } = event;
    if (over == null) {
      return;
    }
    // 今ドロップしているアルバムの画像情報をDroppableの領域にセットする
    setDroppedSrc(activeSrc);
  }
  return (
    <>
      <div className="flex px-16">
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <AlbumSearchCard
            albums={albums}
            activeId={activeId}
            activeAlt={activeAlt}
            activeSrc={activeSrc}
            isDragging={isDragging}
            setSearchAlbumInput={setSearchAlbumInput}
            onSearchClick={onSearchClick}
          />
          <AlbumGridEditor />
        </DndContext>
      </div>
    </>
  );
}
