import { LayoutDashboard, Users, BookOpen, HelpCircle, BarChart2, Settings, X } from 'lucide-react'

const navigation = [
  { name: 'Dashboard', icon: "/dashboard.png", href: '/dashboard', current: false },
  { name: 'Students', icon: "/students.png", href: '/students', current: true },
  { name: 'Chapter', icon: "/chapter.png", href: '/chapters', current: false },
  { name: 'Help', icon: "/help.png", href: '/help', current: false },
  { name: 'Reports', icon: "/reports.png", href: '/reports', current: false },
  { name: 'Settings', icon: "/settings.png", href: '/settings', current: false },
]

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      <div className={`lg:hidden fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-200 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4">
          <img src="/quyl.png" alt="Quyl Logo" className="h-10" />
          <button onClick={() => setIsOpen(false)} className="lg:hidden">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="space-y-1 px-2 mt-5">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                flex items-center px-3 py-2 text-sm font-medium rounded-lg
                ${item.current 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
              `}
            >
              <img className='mr-2' src={item.icon} alt="" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

