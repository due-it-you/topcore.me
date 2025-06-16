import Album from './Album';

export default function DropAlbumGrid() {
  return (
    <div className="aspect-square w-100">
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        <Album />
      </div>
    </div>
  );
}
