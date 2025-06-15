import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

export default function AlbumSearchCard() {
  return (
    <div className="flex h-screen w-2/5 items-center">
      <div className="mx-4 h-4/5 w-full rounded-2xl bg-[#151A1E] shadow-2xl">
        <div className="h-full p-12">
          <SearchBar />
          <SearchResult />
        </div>
      </div>
    </div>
  );
}
