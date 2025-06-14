export default function SearchResult({ children }) {
  return (
    <div className="h-7/8 overflow-y-scroll">
      <div className="grid grid-cols-4 gap-1">{children}</div>
    </div>
  );
}
