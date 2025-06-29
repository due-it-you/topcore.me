import { useState } from 'react';
import { Slider } from '../../slider';

export default function GridRowsColumnsSlider() {
  const [gridRows, setGridRows] = useState(3);
  const [gridColumns, setGridColumns] = useState(3);
  return (
    <div>
      <div>
        <div className="font-bold text-white">グリッドの列</div>
        <div className="mt-4 flex">
          <div className="mr-2 flex aspect-square w-1/10 items-center justify-center rounded-md bg-gray-600 text-white">
            <div>{gridRows}</div>
          </div>
          <Slider
            min={2}
            max={10}
            defaultValue={[3]}
            onValueChange={(e) => setGridRows(e[0])}
            className="w-9/10"
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="font-bold text-white">グリッドの行</div>
        <div className="mt-4 flex">
          <div className="mr-2 flex aspect-square w-1/10 items-center justify-center rounded-md bg-gray-600 text-white">
            <div>{gridColumns}</div>
          </div>
          <Slider
            min={2}
            max={10}
            defaultValue={[3]}
            onValueChange={(e) => setGridColumns(e[0])}
            className="w-9/10"
          />
        </div>
      </div>
    </div>
  );
}
