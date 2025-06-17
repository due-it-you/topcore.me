import Color from './Color';

export default function ColorPalette() {
  return (
    <div className="mt-8 flex h-2/3 w-full justify-center rounded-2xl bg-[#151A1E]">
      <div className="grid grid-cols-1 gap-1">
        <Color className={'border border-gray-600 bg-[#121212]'} />
        <Color className={'bg-[#3E7CB6]'} />
        <Color className={'bg-[#72A7D3]'} />
        <Color className={'bg-[#79A00E]'} />
        <Color className={'bg-[#3EC199]'} />
        <Color className={'bg-[#DA7742]'} />
        <Color className={'bg-[#D99AAD]'} />
        <Color className={'bg-[#FFF3E3]'} />
      </div>
    </div>
  );
}
