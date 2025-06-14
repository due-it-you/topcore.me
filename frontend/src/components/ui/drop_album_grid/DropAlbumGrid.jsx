export default function DropAlbumGrid({ children }) {
  return (
    <div className="flex h-screen w-3/5 items-center">
      <div className="mx-4 aspect-square w-3/4">
        <div className="h-full p-12">
          <div className="grid grid-cols-3 grid-rows-3 gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
