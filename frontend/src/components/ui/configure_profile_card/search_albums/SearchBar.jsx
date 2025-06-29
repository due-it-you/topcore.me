import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SearchBar({ onSearchClick, setSearchAlbumInput }) {
  function enterToSearch(e) {
    // ※ e.keyにすると入力確定のEnterが反応してしまうため、
    //   e.keyCodeで入力確定のEnterがfalseになるようにします。
    //  13のキーコードは「入力確定後のEnter」に割り当てられたキーコードです。
    //  e.isComposingなどは、Safariの場合に適用されないという問題があるため注意。
    if (e.keyCode === 13) {
      onSearchClick();
    }
  }

  return (
    <div className="mb-4 flex items-center justify-center">
      <Input
        className="w-3/4 rounded-md border border-gray-300 bg-white/5 px-4 py-5 text-white placeholder-gray-400 backdrop-blur focus:ring-2 focus:ring-cyan-500"
        placeholder="人物名, 曲名などからアルバムを検索"
        onChange={(e) => setSearchAlbumInput(e.target.value)}
        onKeyDown={(e) => enterToSearch(e)}
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
