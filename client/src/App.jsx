import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentModal from './components/AddStudentModal';
import {Routes,Route} from 'react-router-dom'
import NotFound from './NotFound';
export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const openAddStudentModal = () => setIsAddStudentModalOpen(true);
  const closeAddStudentModal = () => setIsAddStudentModalOpen(false);

  return (
    
    <Provider store={store}>
      <Routes>
        <Route path='/' element={ <div className="flex h-screen bg-gray-100">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header
            toggleSidebar={toggleSidebar}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <StudentTable
            searchQuery={searchQuery}
            openAddStudentModal={openAddStudentModal}
          />
          <AddStudentModal isOpen={isAddStudentModalOpen} onClose={closeAddStudentModal} />
        </div>
      </div>}></Route>
     
     <Route path='*' element={<NotFound/>}></Route>

      </Routes>
    </Provider>
  );
}
