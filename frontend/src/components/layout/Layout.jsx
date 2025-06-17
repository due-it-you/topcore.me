import { useState } from "react";

export default function Layout({ children }) {
  const [color, setColor] = useState('#121212')
  return (
    <>
      <div className={`min-h-screen bg-[${color}]`}>{children}</div>
    </>
  );
}
