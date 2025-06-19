import React from 'react';
import Cropper from 'react-easy-crop';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { ASPECT_RATIO, CROP_WIDTH } from './Uploader';

export default function CropperModal({
  crop,
  setCrop,
  zoom,
  setZoom,
  onCropComplete,
  open,
  onClose,
  imgSrc,
  showCroppedImage,
  onMediaLoaded,
  minZoom,
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="flex h-[500px] w-[420px] flex-col justify-center overflow-hidden rounded-lg p-0">
        <DialogTitle className="sr-only">画像の切り取り</DialogTitle>
        <div className="relative h-[400px] rounded-t-lg bg-[#f4f7fb]">
          <Cropper
            image={imgSrc}
            crop={crop}
            cropShape="round"
            zoom={zoom}
            minZoom={minZoom}
            maxZoom={minZoom + 3}
            aspect={ASPECT_RATIO}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            cropSize={{
              width: CROP_WIDTH,
              height: CROP_WIDTH / ASPECT_RATIO,
            }}
            classes={{
              containerClassName: 'container',
              cropAreaClassName: 'border-4 border-[#00A0FF]',
              mediaClassName: 'media',
            }}
            onMediaLoaded={onMediaLoaded}
            showGrid={false}
          />
        </div>

        <div className="mt-2 flex h-10 items-center px-6">
          <Slider
            min={minZoom}
            max={minZoom + 3}
            step={0.1}
            value={[zoom]}
            onValueChange={(value) => {
              if (typeof value[0] === 'number') {
                setZoom(value[0]);
              }
            }}
            className="w-full text-[#00A0FF]"
          />
        </div>

        <div className="mt-3 mb-2 flex items-center justify-between px-10">
          <Button
            variant="secondary"
            className="bg-gray-500 text-white hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            className="bg-[#00A0FF] text-white hover:bg-[#0088dd]"
            onClick={() => {
              onClose();
              showCroppedImage();
            }}
          >
            OK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
