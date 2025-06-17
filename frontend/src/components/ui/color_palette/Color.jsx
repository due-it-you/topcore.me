export default function Color({ className, color, setColor }) {
  function onColorClick() {
    setColor(color);
  }
  return (
    <button
      onClick={onColorClick}
      className="h-8 w-8 rounded-full hover:opacity-75 border border-gray-600"
      style={{ background: color }}
    ></button>
  );
}
