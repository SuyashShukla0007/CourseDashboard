
import { useState } from 'react'
import { SearchIcon, BellIcon, MessageCircleQuestionIcon as QuestionCircleIcon, LayoutGridIcon, MenuIcon } from 'lucide-react'

export default function Header({ toggleSidebar }) {
  const [searchQuery, setSearchQuery] = useState('')

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
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full hidden sm:block">
          <QuestionCircleIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full hidden sm:block">
          <LayoutGridIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <BellIcon className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <span className="font-medium hidden sm:inline">Adeline H. Dancy</span>
        </div>
      </div>
    </header>
  )
}

