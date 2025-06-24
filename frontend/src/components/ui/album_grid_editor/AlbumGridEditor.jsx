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
import { FaSquareXTwitter } from 'react-icons/fa6';
import toast, { Toaster } from 'react-hot-toast';
import { Progress } from '@/components/ui/progress';

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
        toast.success('コピーが完了しました！');
      },
      () => {
        toast.error('コピーが失敗しました...');
      },
    );
  }
  return (
    <div className="order-1 mb-4 w-full items-center justify-center lg:order-2 lg:mb-0 lg:flex lg:h-screen lg:w-3/5">
      <div>
        <Toaster />
      </div>
      <div className="lg:mx-4 lg:flex lg:aspect-square lg:w-3/4">
        <div className="h-full lg:p-12">
          <div className="mt-12 flex justify-center lg:mt-0">
            <DropAlbumGrid assignedAlbums={assignedAlbums} />
          </div>
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
                <DialogContent className="border border-[#646464] bg-[#151A1E] p-8 text-white lg:p-12">
                  {step === 'form' && (
                    <>
                      <DialogHeader>
                        <DialogTitle className="text-md lg:text-xl">
                          アイコンの設定（任意）
                        </DialogTitle>
                      </DialogHeader>
                      <div>
                        <Uploader setAvatarBlob={setAvatarBlob} />
                      </div>
                      <DialogHeader className="mt-4">
                        <DialogTitle className="text-md lg:text-xl">
                          表示するユーザ名の設定（必須）
                        </DialogTitle>
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
                  {step === 'progress' && (
                    <div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold">作成中...</div>
                          <div className="mt-2">
                            <Progress value={progress} className="w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {step === 'success' && (
                    <div>
                      <DialogHeader className="mt-4">
                        <DialogTitle className="text-sm lg:text-xl">
                          リンクの生成が完了しました！🎉
                        </DialogTitle>
                        <DialogDescription className="text-md font-semibold">
                          コピーしてSNSのプロフィールに貼りましょう!!
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 rounded-xl bg-gray-800 text-sm text-white lg:text-xl">
                        <div className="flex items-center justify-between p-4">
                          <div id="txt">https://topcore.me/music/{slug}</div>
                          <button
                            onClick={onCopyClipboardClick}
                            className="aspect-square h-6 rounded-sm bg-white text-black hover:bg-gray-200 lg:h-8"
                          >
                            <FontAwesomeIcon icon={faClipboard} />
                          </button>
                        </div>
                      </div>
                      <a
                        href={'https://twitter.com/intent/tweet?hashtags=好きな音楽アルバムを集めたプロフィールカードを作ってみた&text=https://topcore.me/music/' + slug }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex justify-center">
                          <div className="mt-8 flex items-center justify-center rounded-2xl bg-black px-4 py-2 font-medium">
                            <div className="mr-2">
                              <FaSquareXTwitter color="white" size="2em" />
                            </div>
                            <div className="text-md text-white">Xでリンクをシェア</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </div>
        <div className="h-full lg:w-1/4">
          <ColorPalette color={color} setColor={setColor} />
        </div>
      </div>
    </div>
  );
}
