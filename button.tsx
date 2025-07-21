import * as React from "react";

export function Button({ children, onClick, className }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium ${className}`}
    >
      {children}
    </button>
  );
}
