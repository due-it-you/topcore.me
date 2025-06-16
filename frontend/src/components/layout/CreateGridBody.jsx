export default function CreateGridBody() {
  return (
    <>
      <div className="flex px-16">
        <DndContext>
          <AlbumSearchCard />
          <AlbumGridEditor />
        </DndContext>
      </div>
    </>
  );
}
