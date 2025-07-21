export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-green-600 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
}