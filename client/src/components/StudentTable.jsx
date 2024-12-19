import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trash2 } from 'lucide-react';
import { DeleteConfirmationModal } from './DeleteConfirmationModal';
import { fetchStudents, deleteStudent } from '../store/studentsSlice';

export default function StudentTable({ openAddStudentModal }) {
  const dispatch = useDispatch();
  const { students, status, error } = useSelector((state) => state.students);
  const [selectedYear, setSelectedYear] = useState('AY 2024-25');
  const [selectedClass, setSelectedClass] = useState('CBSE 9');
  const [studentToDelete, setStudentToDelete] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  const handleDeleteStudent = (student) => {
    setStudentToDelete(student);
  };

  const confirmDelete = () => {
    if (studentToDelete) {
      dispatch(deleteStudent(studentToDelete.id));
      setStudentToDelete(null);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-1 p-4 overflow-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
        <div className="flex flex-col sm:flex-row gap-2">
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="px-3 py-2 border rounded-lg bg-gray-50"
          >
            <option>AY 2024-25</option>
          </select>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-3 py-2 border rounded-lg bg-gray-50"
          >
            <option>CBSE 9</option>
          </select>
        </div>
        <button 
          onClick={openAddStudentModal}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add new Student
        </button>
      </div>

      <div className="bg-white rounded-lg border overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cohort
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Courses
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Joined
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Login
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.cohort}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex flex-wrap gap-2">
                    {student.courses.map((course) => (
                      <span key={course.course.id} className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                        {course.course.name}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(student.dateJoined).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.lastLogin ? new Date(student.lastLogin).toLocaleString() : 'N/A'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`inline-block h-2 w-2 rounded-full ${
                    student.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleDeleteStudent(student)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteConfirmationModal
        isOpen={!!studentToDelete}
        onClose={() => setStudentToDelete(null)}
        onConfirm={confirmDelete}
        studentName={studentToDelete?.name || ''}
      />
    </div>
  );
}

