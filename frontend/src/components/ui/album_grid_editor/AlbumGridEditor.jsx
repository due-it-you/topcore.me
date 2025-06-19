import Uploader from '../upload_image/Uploader';
import ColorPalette from '../color_palette/ColorPalette';
import { Button } from '@/components/ui/button';
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
import DropAlbumGrid from './DropAlbumGrid';
import { Input } from '../input';

export default function AlbumGridEditor({ assignedAlbums, color, setColor }) {
  return (
    <div className="flex h-screen w-3/5 items-center justify-center">
      <div className="mx-4 flex aspect-square w-3/4">
        <div className="h-full p-12">
          <DropAlbumGrid assignedAlbums={assignedAlbums} />
          <div className="mt-4 text-right">
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button className="bg-[#20C997] font-semibold text-white hover:bg-[#1DB954]">
                    リンクを生成
                  </Button>
                </DialogTrigger>
                <DialogContent className="border border-[#646464] bg-[#151A1E] p-12 text-white sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>ユーザー名とアイコンの設定</DialogTitle>
                    <DialogDescription>※アイコンの設定は任意です</DialogDescription>
                  </DialogHeader>
                  <div>
                    <Uploader />
                  </div>
                  <div>
                    <Input />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button className="border border-gray-400 hover:bg-gray-800">
                        キャンセル
                      </Button>
                    </DialogClose>
                    <Button type="submit" className="bg-[#20C997] font-bold hover:bg-[#1DB954]">
                      完了
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </div>
        <div className="h-full w-1/4">
          <ColorPalette color={color} setColor={setColor} />
        </div>
      </div>
    </div>
  );
}
