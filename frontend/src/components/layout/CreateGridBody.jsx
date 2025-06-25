import { useState, useEffect } from 'react';
import axios from './../../../api/lib/apiClient';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  DndContext,
  pointerWithin,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';
import AlbumSearchCard from '../ui/album_search/AlbumSearchCard';
import AlbumGridEditor from '../ui/album_grid_editor/AlbumGridEditor';

export default function CreateGridBody({ color, setColor }) {
  const [disabledCreateSettingButton, setDisabledCreateSettingButton] = useState(true);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  // shadcnのDialogの表示を制御するステート
  const [open, setOpen] = useState(false);
  //プロフィールカードのリンクのためのslug
  const [slug, setSlug] = useState(null);
  // プロフィールカードの画像データ
  const [avatarBlob, setAvatarBlob] = useState(null);
  // プロフィールカードに表示されるユーザー名
  const [displayName, setDisplayName] = useState('');
  // プロフィールカードの保存処理における進捗の状態管理
  const [progress, setProgress] = useState(0);
  // ドラッグしている対象の状態管理
  const [activeId, setActiveId] = useState(null);
  const [activeSrc, setActiveSrc] = useState(null);
  const [activeAlt, setActiveAlt] = useState(null);
  const [activeSpotifyId, setActiveSpotifyId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  // 検索機能における状態管理
  const [albums, setAlbums] = useState(null);
  const [searchAlbumInput, setSearchAlbumInput] = useState(null);
  // グリッドのマスの状態管理
  const [assignedAlbums, setAssignedAlbums] = useState([
    { id: 'cell-0', src: null, alt: null, spotifyId: null },
    { id: 'cell-1', src: null, alt: null, spotifyId: null },
    { id: 'cell-2', src: null, alt: null, spotifyId: null },
    { id: 'cell-3', src: null, alt: null, spotifyId: null },
    { id: 'cell-4', src: null, alt: null, spotifyId: null },
    { id: 'cell-5', src: null, alt: null, spotifyId: null },
    { id: 'cell-6', src: null, alt: null, spotifyId: null },
    { id: 'cell-7', src: null, alt: null, spotifyId: null },
    { id: 'cell-8', src: null, alt: null, spotifyId: null },
  ]);
  // [ユーザー名, 画像アイコン]の設定モーダル -> 生成されたリンクの表示モーダル のステップの管理
  const [step, setStep] = useState('form');

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    // 全てのグリッドのマスにアルバムが割り当てられているかのチェック
    const allAssigned = assignedAlbums.every((album) => album.src && album.alt && album.spotifyId);
    setDisabledCreateSettingButton(!allAssigned);
  }, [assignedAlbums]);

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
      setActiveSpotifyId(albums[event.active.id]?.spotifyId);
    } else if (fromGrid) {
      setActiveSrc(fromGrid.src);
      setActiveAlt(fromGrid.alt);
      setActiveSpotifyId(fromGrid.spotifyId);
    } else {
      setActiveSrc(null);
      setActiveAlt(null);
      setActiveSpotifyId(null);
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
          return { ...album, src: activeSrc, alt: activeAlt, spotifyId: activeSpotifyId };
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

  // プロフィールカードのリンク生成
  async function onGenerateLinkButtonClick() {
    const formData = new FormData();
    formData.append('profile_cards[display_name]', displayName);
    formData.append('profile_cards[bg_color]', color);
    formData.append('profile_cards[grid_rows]', 3);
    formData.append('profile_cards[grid_columns]', 3);

    assignedAlbums.forEach((album, index) => {
      formData.append(`albums[][id]`, album.id);
      formData.append(`albums[][src]`, album.src);
      formData.append(`albums[][alt]`, album.alt);
      formData.append(`albums[][spotify_id]`, album.spotifyId);
    });

    if (avatarBlob) {
      formData.append('profile_cards[avatar]', avatarBlob, 'avatar.jpg');
    }

    setStep('progress');
    const res = await axios.post('/profile_cards', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (e) => {
        if (!e.total) return;
        const percentCompleted = Math.round((e.loaded * 100) / e.total);
        setProgress(percentCompleted);
      },
    });

    // slugがあればslugを渡してモーダルのステップを進める。 なければエラーを表示する。
    if (res.data.slug) {
      setSlug(res.data.slug);
      setStep('success');
    } else {
      setStep('error');
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 lg:flex-row lg:items-start lg:justify-start lg:px-16">
        <DndContext
          sensors={sensors}
          collisionDetection={pointerWithin}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="border border-[#646464] bg-[#151A1E] p-8 text-white lg:p-12">
              <Carousel className="m-4">
                <CarouselContent>
                  <CarouselItem>
                    <DialogTitle>
                      <h1>①アルバムの検索</h1>
                    </DialogTitle>
                      <div className="mt-4">
                        <img src="/carousel/carousel_1.gif"></img>
                      </div>
                  </CarouselItem>
                  <CarouselItem>
                    <DialogTitle>使い方２</DialogTitle>
                  </CarouselItem>
                  <CarouselItem>
                    <DialogTitle>使い方３</DialogTitle>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DialogContent>
          </Dialog>
          <AlbumSearchCard
            albums={albums}
            activeId={activeId}
            activeAlt={activeAlt}
            activeSrc={activeSrc}
            activeSpotifyId={activeSpotifyId}
            isDragging={isDragging}
            setSearchAlbumInput={setSearchAlbumInput}
            onSearchClick={onSearchClick}
          />
          <AlbumGridEditor
            assignedAlbums={assignedAlbums}
            color={color}
            setColor={setColor}
            setAvatarBlob={setAvatarBlob}
            onGenerateLinkButtonClick={onGenerateLinkButtonClick}
            setDisplayName={setDisplayName}
            disabledCreateSettingButton={disabledCreateSettingButton}
            step={step}
            slug={slug}
            progress={progress}
          />
        </DndContext>
      </div>
    </>
  );
}
