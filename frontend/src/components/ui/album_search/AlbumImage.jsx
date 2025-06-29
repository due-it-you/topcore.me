export default function AlbumImage({ src, alt, spotifyId }) {
  return (
    <img
      src={src}
      alt={alt}
      spotifyId={spotifyId}
      className="aspect-square h-full w-full rounded-xl border border-white object-cover"
    />
  );
}
