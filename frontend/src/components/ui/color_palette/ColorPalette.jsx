import Color from './Color';

export default function ColorPalette({ color, setColor }) {
  return (
    <div className="mt-8 md:h-2/3 md:w-3/5 justify-center md:rounded-2xl md:bg-[#151A1E] md:flex">
      <div className="my-4 grid grid-cols-9 md:grid-cols-1 gap-1">
        <Color color={'#121212'} setColor={setColor} />
        <Color color={'#3E7CB6'} setColor={setColor} />
        <Color color={'#72A7D3'} setColor={setColor} />
        <Color color={'#79A00E'} setColor={setColor} />
        <Color color={'#3EC199'} setColor={setColor} />
        <Color color={'#DA7742'} setColor={setColor} />
        <Color color={'#F4A2BB'} setColor={setColor} />
        <Color color={'#FFF3E3'} setColor={setColor} />
        <div className="h-8 w-8 border border-gray-700 md:border-gray-400" style={{ background: color }}>
          <input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className="h-full w-full opacity-0"
          />
        </div>
      </div>
    </div>
  );
}
