import ColorPalette from '../color_palette/ColorPalette';
import { Button } from '@/components/ui/button';
import DropAlbumGrid from './DropAlbumGrid';

export default function AlbumGridEditor({ assignedAlbums, color, setColor }) {
  return (
    <div className="flex h-screen w-3/5 items-center justify-center">
      <div className="mx-4 flex aspect-square w-3/4">
        <div className="h-full p-12">
          <DropAlbumGrid assignedAlbums={assignedAlbums} />
          <div className="mt-4 text-right">
            <Button className="bg-[#20C997] font-semibold text-white hover:bg-[#1DB954]">
              リンクを生成
            </Button>
          </div>
        </div>
        <div className="h-full w-1/4">
          <ColorPalette color={color} setColor={setColor} />
        </div>
      </div>
    </div>
  );
}
