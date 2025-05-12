// /* eslint-disable react/prop-types */
// // eslint-disable-next-line react/prop-types
// const ResultTable = ({ studentData }) => {
//   return (
//     <>
//       <div className="" style={{ overflow: "auto" }}>
//         <table style={{ width: "100%", borderCollapse: "separate" }}>
//           <thead>
//             <tr className="">
//               <th
//                 className="border-b border-b-black"
//                 style={{ padding: "10px" }}
//               >
//                 Name
//               </th>
//               <th
//                 className="border-b border-b-black ml-4"
//                 style={{ padding: "10px" }}
//               >
//                 Student ID
//               </th>
//               <th
//                 className="border-b border-b-black"
//                 style={{ padding: "10px" }}
//               >
//                 Registration ID
//               </th>
//               <th
//                 className="border-b border-b-black"
//                 style={{ padding: "10px" }}
//               >
//                 Marks
//               </th>
//               <th
//                 className="border-b border-b-black"
//                 style={{ padding: "10px" }}
//               >
//                 Grade
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentData.map((student, index) => (
//               <tr
//                 className="mt-4"
//                 key={index}
//                 style={{ borderBottom: "1px solid black" }}
//               >
//                 <td
//                   className="  items-center  mt-3 flex gap-6"
//                   style={{ padding: "10px" }}
//                 >
//                   <div
//                     style={{
//                       backgroundImage: `url(https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D)`,

//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                     className="w-[40px] h-[40px] border border-[#00E8BE] rounded-full"
//                   ></div>
//                   <div>{student.name}</div>
//                 </td>
//                 <td className="text-center" style={{ padding: "10px" }}>
//                   {student.studentId}
//                 </td>
//                 <td className="text-center" style={{ padding: "10px" }}>
//                   {student.registrationId}
//                 </td>
//                 <td className="text-center" style={{ padding: "10px" }}>
//                   {student.marks}
//                 </td>
//                 <td className="text-center" style={{ padding: "10px" }}>
//                   {student.grade}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default ResultTable;


"use client"

import { useEffect, useRef, useState } from "react"

// Define the student data type




const ResultTable = ({ studentData }) => {
  // Add exam type to each student if not present
  const examTypes = ["Final", "Midterm", "Quiz", "Assignment"]

  const enhancedStudentData = studentData.map((student, index) => ({
    ...student,
    examType: student.examType || examTypes[index % examTypes.length],
    imageUrl: `https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${(index % 70) + 1}.jpg`,
  }))

  const [filteredData, setFilteredData] = useState(enhancedStudentData)
  const [filters, setFilters] = useState({
    examType: "",
    minMarks: 0,
    maxMarks: 100,
    searchQuery: "",
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const filterRef = useRef(null)

  // Close filter dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Apply filters when they change
  useEffect(() => {
    let result = enhancedStudentData

    // Filter by exam type
    if (filters.examType && filters.examType !== "all") {
      result = result.filter((student) => student.examType === filters.examType)
    }

    // Filter by marks range
    result = result.filter((student) => student.marks >= filters.minMarks && student.marks <= filters.maxMarks)

    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      result = result.filter(
        (student) =>
          student.name.toLowerCase().includes(query) ||
          student.studentId.toLowerCase().includes(query) ||
          student.registrationId.toLowerCase().includes(query),
      )
    }

    setFilteredData(result)
  }, [filters, enhancedStudentData])

  // Get unique exam types from data
  const uniqueExamTypes = Array.from(new Set(enhancedStudentData.map((student) => student.examType)))

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      examType: "",
      minMarks: 0,
      maxMarks: 100,
      searchQuery: "",
    })
  }

  // Get grade color based on grade
  const getGradeColor = (grade) => {
    switch (grade) {
      case "A+":
      case "A":
        return "bg-green-100 text-green-800"
      case "B+":
      case "B":
        return "bg-blue-100 text-blue-800"
      case "C+":
      case "C":
        return "bg-yellow-100 text-yellow-800"
      case "D":
        return "bg-orange-100 text-orange-800"
      case "F":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      {/* Filters and Search */}
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row gap-3 justify-between">
        <div className="relative flex-1 max-w-md">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by name or ID..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filters.searchQuery}
            onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
          />
        </div>

        <div className="flex gap-2 items-center">
          <div className="relative">
            <select
              className="appearance-none bg-white border border-slate-200 text-slate-700 py-2 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.examType}
              onChange={(e) => setFilters({ ...filters, examType: e.target.value })}
            >
              <option value="">All Exam Types</option>
              {uniqueExamTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-1 py-2 px-4 bg-white border border-slate-200 rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              <span className="hidden sm:inline">Marks</span>
            </button>

            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border border-slate-200">
                <div className="p-4">
                  <h4 className="font-medium text-slate-800 mb-3">Filter by Marks</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-500">Min: {filters.minMarks}</span>
                      <span className="text-sm text-slate-500">Max: {filters.maxMarks}</span>
                    </div>
                    <div className="flex gap-4">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={filters.minMarks}
                        onChange={(e) => setFilters({ ...filters, minMarks: Number.parseInt(e.target.value) })}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={filters.maxMarks}
                        onChange={(e) => setFilters({ ...filters, maxMarks: Number.parseInt(e.target.value) })}
                        className="w-full"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={resetFilters}
                        className="px-3 py-1 text-sm border border-slate-200 rounded-md hover:bg-slate-50"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {(filters.examType || filters.minMarks > 0 || filters.maxMarks < 100) && (
            <button onClick={resetFilters} className="text-sm text-slate-500 hover:text-slate-700">
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Active filters */}
      {(filters.examType || filters.minMarks > 0 || filters.maxMarks < 100) && (
        <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-slate-500 mr-1">Active filters:</span>
          {filters.examType && (
            <span className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Exam: {filters.examType}
            </span>
          )}
          {(filters.minMarks > 0 || filters.maxMarks < 100) && (
            <span className="px-2 py-1 text-xs rounded-full bg-teal-50 text-teal-700 border border-teal-200">
              Marks: {filters.minMarks} - {filters.maxMarks}
            </span>
          )}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider border-b border-slate-200">
                Student
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider border-b border-slate-200">
                Student ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider border-b border-slate-200">
                Registration ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider border-b border-slate-200">
                Exam Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider border-b border-slate-200">
                Marks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider border-b border-slate-200">
                Grade
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {filteredData.length > 0 ? (
              filteredData.map((student, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full object-cover border-2 border-teal-400"
                          src={student.imageUrl || "/placeholder.svg"}
                          alt={student.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-slate-900">{student.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{student.studentId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{student.registrationId}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {student.examType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-slate-200 rounded-full h-2.5 mb-1">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2.5 rounded-full"
                        style={{ width: `${student.marks}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-slate-600 text-right">{student.marks}/100</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${getGradeColor(student.grade)}`}>
                      {student.grade}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-slate-500">
                  No results found for the selected filters.
                  <div className="mt-2">
                    <button
                      onClick={resetFilters}
                      className="px-3 py-1 text-sm border border-slate-200 rounded-md hover:bg-slate-50"
                    >
                      Reset Filters
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Table footer with pagination or summary */}
      <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-sm text-slate-500">
        Showing {filteredData.length} of {enhancedStudentData.length} students
      </div>
    </div>
  )
}

export default ResultTable
