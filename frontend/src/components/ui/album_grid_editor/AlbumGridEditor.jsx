import { useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';

export default function AlbumGridEditor({
  assignedAlbums,
  color,
  setColor,
  onGenerateLinkButtonClick,
  setDisplayName,
  setAvatarBlob,
  disabledCreateSettingButton,
  step,
  slug,
  progress,
}) {
  const [disabledGenerateLinkButton, setDisabledGenerateLinkButton] = useState(true);
  function handleDisplayNameChange(e) {
    setDisplayName(e.target.value);
    if (e.target.value === '') {
      setDisabledGenerateLinkButton(true);
    } else {
      setDisabledGenerateLinkButton(false);
    }
  }
  function onCopyClipboardClick() {
    const txt = document.getElementById('txt');
    navigator.clipboard.writeText(txt.textContent).then(
      () => {
        toast.success('コピーが完了しました！')
      },
      () => {
        toast.error('コピーが失敗しました...')
      },
    );
  }
  return (
    <div className="flex h-screen w-3/5 items-center justify-center">
      <div><Toaster /></div>
      <div className="mx-4 flex aspect-square w-3/4">
        <div className="h-full p-12">
          <DropAlbumGrid assignedAlbums={assignedAlbums} />
          <div className="mt-4 text-right">
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button
                    disabled={disabledCreateSettingButton}
                    className="bg-[#20C997] font-semibold text-white hover:bg-[#1DB954]"
                  >
                    作成へ進む
                  </Button>
                </DialogTrigger>
                <DialogContent className="border border-[#646464] bg-[#151A1E] p-12 text-white">
                  {step === 'form' && (
                    <>
                      <DialogHeader>
                        <DialogTitle>アイコンの設定（任意）</DialogTitle>
                      </DialogHeader>
                      <div>
                        <Uploader setAvatarBlob={setAvatarBlob} />
                      </div>
                      <DialogHeader className="mt-4">
                        <DialogTitle>表示するユーザ名の設定（必須）</DialogTitle>
                      </DialogHeader>
                      <div>
                        <Input onChange={handleDisplayNameChange} />
                      </div>
                      <DialogFooter className="mt-4">
                        <DialogClose asChild>
                          <Button className="border border-gray-400 hover:bg-gray-800">
                            キャンセル
                          </Button>
                        </DialogClose>
                        <Button
                          disabled={disabledGenerateLinkButton}
                          type="submit"
                          className="bg-[#20C997] font-bold hover:bg-[#1DB954]"
                          onClick={onGenerateLinkButtonClick}
                        >
                          完了
                        </Button>
                      </DialogFooter>
                    </>
                  )}
                  {step === 'success' && (
                    <div>
                      <DialogHeader className="mt-4">
                        <DialogTitle className="text-xl">
                          リンクの生成が完了しました！🎉
                        </DialogTitle>
                        <DialogDescription className="text-md font-semibold">
                          コピーしてSNSのプロフィールに貼りましょう!!
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 rounded-xl bg-gray-800 text-xl text-white">
                        <div className="flex items-center justify-between p-4">
                          <div id="txt">https://topcore.me/music/{slug}</div>
                          <button
                            onClick={onCopyClipboardClick}
                            className="aspect-square h-8 rounded-sm bg-white text-black hover:bg-gray-200"
                          >
                            <FontAwesomeIcon icon={faClipboard} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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
