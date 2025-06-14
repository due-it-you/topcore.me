import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SearchBar() {
  return (
    <div className="mb-4 flex items-center justify-center">
      <Input
        className="w-3/4 bg-[#252A30] text-[#C4C6C9]"
        placeholder="検索したいアルバムを入力してください"
      />
      <Button
        variant="secondary"
        size="icon"
        className="mx-2 size-10 bg-[#252A30] hover:bg-[#1E2328]"
      >
        🔍
      </Button>
    </div>
  );
}
