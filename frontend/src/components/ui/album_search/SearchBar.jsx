import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SearchBar({ onSearchClick, setSearchAlbumInput }) {
  return (
    <div className="mb-4 flex items-center justify-center">
      <Input
        className="w-3/4 rounded-md border border-gray-300 bg-white/5 px-4 py-5 text-white placeholder-gray-400 backdrop-blur focus:ring-2 focus:ring-cyan-500"
        placeholder="人物名, 曲名などからアルバムを検索"
        onChange={(e) => setSearchAlbumInput(e.target.value)}
      />
      <Button
        onClick={onSearchClick}
        variant="secondary"
        size="icon"
        className="mx-2 size-10 border border-gray-200 bg-[#252A30] hover:bg-[#1E2328] active:bg-cyan-500"
      >
        🔍
      </Button>
    </div>
  );
}
