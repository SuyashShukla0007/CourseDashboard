import { SearchIcon, MenuIcon } from 'lucide-react';

export default function Header({ toggleSidebar, searchQuery, setSearchQuery }) {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
      <div className="flex items-center lg:hidden">
        <button onClick={toggleSidebar} className="p-2 mr-2">
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex items-center flex-1 max-w-3xl">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search your course"
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
}
