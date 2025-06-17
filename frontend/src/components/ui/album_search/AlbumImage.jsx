export default function AlbumImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="aspect-square h-full w-full rounded-xl border border-white object-cover"
    />
  );
}
