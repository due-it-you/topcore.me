export default function SearchedAlbum({ src, alt }) {
  return (
    <div>
      <div>
        <img src={src} alt={alt} className="aspect-square h-full w-full rounded-xl object-cover" />
      </div>
    </div>
  );
}
