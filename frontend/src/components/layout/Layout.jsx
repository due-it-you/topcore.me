import { useState } from "react";

export default function Layout({ children, color }) {
  return (
    <>
      <div className={`min-h-screen bg-[${color}]`}>{children}</div>
    </>
  );
}
