export default function Header({children}) {
  return (
    <>
      <div className="h-16 w-full border-b border-gray-800 bg-[#131313] shadow-xl">
        <div className="flex items-center px-4">
          <a href="/" className="inline-block">
            <img src="/top_core_logo_trimmed.png" alt="top_core_me_logo" className="h-16" />
          </a>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
