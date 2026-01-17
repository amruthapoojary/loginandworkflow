export default function Header() {
  return (
    <div className="h-14 bg-white border-b flex items-center px-6 justify-between">
      <input
        placeholder="Search data, notebooks, recents and more"
        className="border rounded px-4 py-1 w-96 text-sm"
      />
      <div className="w-8 h-8 rounded-full bg-gray-300" />
    </div>
  );
}
