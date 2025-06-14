import Color from "./Color";

export default function ColorPalette() {
  return (
    <div className="mt-8 h-2/3 w-full rounded-2xl bg-[#151A1E] flex justify-center">
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
