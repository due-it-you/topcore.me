import React, { useState, useCallback } from 'react';
import CropperModal from './CropperModal';
import getCroppedImg from '@/js/getCroppedImg';
import { Button } from '@/components/ui/button';
export const ASPECT_RATIO = 1 / 1;
export const CROP_WIDTH = 50;

const Uploader = ({ setAvatarBlob }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [zoom, setZoom] = useState(1);
  const [minZoom, setMinZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState();
  const [croppedImgSrc, setCroppedImgSrc] = useState('');

  const onFileChange = useCallback(async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (reader.result) {
          setImgSrc(reader.result.toString() || '');
          setIsOpen(true);
        }
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }, []);

  const onMediaLoaded = useCallback((mediaSize) => {
    const { width, height } = mediaSize;
    const mediaAspectRadio = width / height;
    if (mediaAspectRadio > ASPECT_RATIO) {
      const result = CROP_WIDTH / ASPECT_RATIO / height;
      setZoom(result);
      setMinZoom(result);
      return;
    }
    const result = CROP_WIDTH / width;
    setZoom(result);
    setMinZoom(result);
  }, []);

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    if (!croppedAreaPixels) return;
    try {
      const croppedImage = await getCroppedImg(imgSrc, croppedAreaPixels);
      setCroppedImgSrc(croppedImage.previewUrl);
      setAvatarBlob(croppedImage.blob);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, imgSrc]);

  return (
    <div className="flex">
      <div className="mx-auto lg:mt-4 flex w-full max-w-xl items-center justify-center space-y-4">
        {/* アップロードした画像が表示される場所 */}
        <div
          className="mt-4 mr-4 relative overflow-hidden rounded border border-gray-400 bg-gray-100"
          style={{
            width: `${CROP_WIDTH}px`,
            height: `${CROP_WIDTH / ASPECT_RATIO}px`,
            borderRadius: '50%',
          }}
        >
          {croppedImgSrc ? (
            <img src={croppedImgSrc} alt="Cropped" className="h-full w-full object-contain" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-400"></div>
          )}
        </div>

        {/* アップローダー */}
        <div>
          <label className="inline-flex items-center space-x-2">
            <Button asChild className="ml-2 bg-blue-500">
              <span>画像をアップロード</span>
            </Button>
            <input type="file" accept="image/*" onChange={onFileChange} className="hidden" />
          </label>
        </div>

        {/* 実際にユーザーがクロップを行う時のモーダル */}
        <CropperModal
          crop={crop}
          setCrop={setCrop}
          zoom={zoom}
          setZoom={setZoom}
          onCropComplete={onCropComplete}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          imgSrc={imgSrc}
          showCroppedImage={showCroppedImage}
          onMediaLoaded={onMediaLoaded}
          minZoom={minZoom}
        />
      </div>
    </div>
  );
};

export default Uploader;
