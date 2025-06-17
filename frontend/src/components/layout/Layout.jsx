export default function Layout({ children, color }) {
  return (
    <div style={{ backgroundColor: color }} className="min-h-screen">
      {children}
    </div>
  );
}
