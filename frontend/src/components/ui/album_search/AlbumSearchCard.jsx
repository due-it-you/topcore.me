export default function AlbumSearchCard({ children }) {
  return (
    <div className="flex h-screen w-2/5 items-center">
      <div className="mx-4 h-4/5 w-full rounded-2xl bg-[#151A1E] shadow-2xl">
        <div className="h-full p-12">{children}</div>
      </div>
    </div>
  );
}
