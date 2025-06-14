import ColorPalette from '../color_palette/ColorPalette';
import Album from './Album';
import { Button } from '@/components/ui/button';


export default function AlbumGridEditor() {
  return (
    <div className="flex h-screen w-3/5 items-center justify-center">
      <div className="mx-4 flex aspect-square w-3/4">
        <div className="h-full p-12">
          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
            <Album />
          </div>
          <div className="mt-4 text-right">
            <Button className="bg-[#20C997] font-semibold text-white hover:bg-[#1CB588]">
              リンクを生成
            </Button>
          </div>
        </div>
        <div className="h-full w-1/4">
          <ColorPalette />
        </div>
      </div>
    </div>
  );
}
