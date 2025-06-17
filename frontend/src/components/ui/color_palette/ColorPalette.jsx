import Color from './Color';

export default function ColorPalette() {
  return (
    <div className="mt-8 flex h-2/3 w-full justify-center rounded-2xl bg-[#151A1E]">
      <div className="grid grid-cols-1 gap-1">
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
      </div>
    </div>
  );
}
