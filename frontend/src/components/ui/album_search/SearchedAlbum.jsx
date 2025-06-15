export default function SearchedAlbum({src, alt}) {
  return (
    <div>
      <div className="aspect-square rounded-xl bg-white">
        <img
          src={src}
          alt={alt}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
