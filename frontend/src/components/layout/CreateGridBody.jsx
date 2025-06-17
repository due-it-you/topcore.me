import { useState } from 'react';
import axios from './../../../api/lib/apiClient';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';
import AlbumSearchCard from '../ui/album_search/AlbumSearchCard';
import AlbumGridEditor from '../ui/album_grid_editor/AlbumGridEditor';

export default function CreateGridBody() {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  // ドラッグしている対象の状態管理
  const [activeId, setActiveId] = useState(null);
  const [activeSrc, setActiveSrc] = useState(null);
  const [activeAlt, setActiveAlt] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  // 検索機能における状態管理
  const [albums, setAlbums] = useState(null);
  const [searchAlbumInput, setSearchAlbumInput] = useState(null);
  // グリッドのマスの状態管理
  const [assignedAlbums, setAssignedAlbums] = useState([
    { id: 'cell-0', src: null, alt: null },
    { id: 'cell-1', src: null, alt: null },
    { id: 'cell-2', src: null, alt: null },
    { id: 'cell-3', src: null, alt: null },
    { id: 'cell-4', src: null, alt: null },
    { id: 'cell-5', src: null, alt: null },
    { id: 'cell-6', src: null, alt: null },
    { id: 'cell-7', src: null, alt: null },
    { id: 'cell-8', src: null, alt: null },
  ]);

  async function onSearchClick() {
    const res = await axios.get('/albums/search', { params: { name: searchAlbumInput } });
    const albums = res.data.searchedAlbums;
    setAlbums(albums);
  }
  function handleDragStart(event) {
    const activeId = event.active.id;
    setIsDragging(true);
    setActiveId(event.active.id);

    const fromSearch = albums?.[activeId];
    const fromGrid = assignedAlbums.find((a) => a.id === activeId);

    if (fromSearch) {
      setActiveSrc(albums[event.active.id]?.imageUrl);
      setActiveAlt(albums[event.active.id]?.name);
    } else if (fromGrid) {
      setActiveSrc(fromGrid.src);
      setActiveAlt(fromGrid.alt);
    } else {
      setActiveSrc(null);
      setActiveAlt(null);
    }
  }

  function handleDragEnd(event) {
    setIsDragging(false);
    const { active, over } = event;
    if (over == null) {
      return;
    }

    const isFromSearchResult = albums?.[active.id];

    // ドラッグしているアルバムの情報を、ドロップしたマスに割り当てる処理
    if (isFromSearchResult) {
      const updatedCell = assignedAlbums.map((album) => {
        if (album.id == over.id) {
          return { ...album, src: activeSrc, alt: activeAlt };
        }
        return album;
      });
      setAssignedAlbums(updatedCell);
    }

    // マス間の並び替え
    else {
      if (active.id === over.id) return;
      const oldIndex = assignedAlbums.findIndex((album) => album.id === active.id);
      const newIndex = assignedAlbums.findIndex((album) => album.id === over.id);
      const reordered = arrayMove(assignedAlbums, oldIndex, newIndex);
      setAssignedAlbums(reordered);
    }
  }
  return (
    <>
      <div className="flex px-16">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <AlbumSearchCard
            albums={albums}
            activeId={activeId}
            activeAlt={activeAlt}
            activeSrc={activeSrc}
            isDragging={isDragging}
            setSearchAlbumInput={setSearchAlbumInput}
            onSearchClick={onSearchClick}
          />
          <AlbumGridEditor assignedAlbums={assignedAlbums} />
        </DndContext>
      </div>
    </>
  );
}
