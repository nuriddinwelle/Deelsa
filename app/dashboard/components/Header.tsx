"use client";

type Props = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: Props) {
  return (
    <header className="h-16 flex items-center px-4 border-b bg-white">
      <button
        onClick={onMenuClick}
        className="md:hidden mr-4 text-xl"
      >
        ☰
      </button>

      <h1 className="text-xl font-semibold flex-1">Dashboard</h1>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
        <span className="text-sm">Admin</span>
      </div>
    </header>
  );
}
