import ColorPalette from '../color_palette/ColorPalette';

export default function DropAlbumGrid({ children }) {
  return (
    <div className="mt-12 flex h-screen w-3/5 items-center justify-center">
      <div className="mx-4 flex aspect-square w-3/4">
        <div className="h-full p-12">
          <div className="grid grid-cols-3 grid-rows-3 gap-2">{children}</div>
        </div>
        <div className="h-full w-1/4">
          <ColorPalette />
        </div>
      </div>
    </div>
  );
}
