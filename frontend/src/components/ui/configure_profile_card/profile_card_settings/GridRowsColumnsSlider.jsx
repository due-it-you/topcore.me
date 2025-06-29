import { Slider } from '../../slider';

export default function GridRowsColumnsSlider() {
  return (
    <div>
      <div>
        <div className="font-bold text-white">グリッドの列</div>
        <div className="flex mt-4">
          <div className="mr-2 flex aspect-square w-1/10 items-center justify-center rounded-md bg-gray-600 text-white">
            <div>3</div>
          </div>
          <Slider min={2} max={10} defaultValue={[3]} className="w-9/10" />
        </div>
      </div>
    </div>
  );
}
