import Color from './Color';

export default function ColorPalette({ setColor }) {
  return (
    <div className="mt-8 flex h-2/3 w-4/5 justify-center rounded-2xl bg-[#151A1E]">
      <div className="my-4 grid grid-cols-1 gap-1">
        <Color color={'#121212'} className={'border border-gray-600'} setColor={setColor} />
        <Color color={'#3E7CB6'} setColor={setColor} />
        <Color color={'#72A7D3'} setColor={setColor} />
        <Color color={'#79A00E'} setColor={setColor} />
        <Color color={'#3EC199'} setColor={setColor} />
        <Color color={'#DA7742'} setColor={setColor} />
        <Color color={'#F4A2BB'} setColor={setColor} />
        <Color color={'#FFF3E3'} setColor={setColor} />
      </div>
    </div>
  );
}
