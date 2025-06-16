export default function AlbumImage({src, alt}) {
  return (
    <img src={src} alt={alt} className="aspect-square h-full w-full rounded-xl object-cover" />
  );
}
