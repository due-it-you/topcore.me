import { useDroppable } from '@dnd-kit/core';

export default function Album() {
  const { setNodeRef } = useDroppable({
    id: 'unique-id',
  });

  return (
    <div className="aspect-square rounded-xl border border-white bg-[#0E1012]">
      <div ref={setNodeRef}>
        {/* <img
          src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          alt="set_album"
          className="rounded-sm"
        /> */}
      </div>
    </div>
  );
}
