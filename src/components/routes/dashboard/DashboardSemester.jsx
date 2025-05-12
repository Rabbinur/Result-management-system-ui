"use client"

import { Book, Calendar, GraduationCap, School, Users } from "lucide-react"
import { Link } from "react-router-dom"
import departmentData from "../../../constant"

const DashboardSemester = () => {
  // Extract semester name from yearSemester
  const getSemester = (yearSemester) => {
    const match = yearSemester.match(/(\d+)(st|nd|rd|th) Semester/)
    return match ? match[0] : null
  }

  // Get all unique semesters (e.g., "1st Semester", "2nd Semester")
  const semesters = Array.from(new Set(departmentData.map((item) => getSemester(item.yearSemester)))).sort()

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-800">Semester-wise Subjects</h1>
          <p className="text-slate-500">Browse and manage subjects by semester</p>
        </header>

        <div className="space-y-12">
          {semesters.map((semester) => {
            const filteredData = departmentData.filter((item) => getSemester(item.yearSemester) === semester)

            return (
              <section key={semester} className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-1.5 rounded-lg bg-white shadow-sm">
                    <Calendar className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-800">{semester}</h2>
                  <span className="ml-2 rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                    {filteredData.length} subjects
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filteredData.map((item) => (
                    <Link
                      key={item.id}
                      to={`/dashboard/semester/${1}/result/${item.id}`}
                      className="group relative overflow-hidden rounded-xl bg-white text-slate-800 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200 flex flex-col h-full"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="p-5 flex flex-col h-full relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <div className="rounded-full bg-blue-100 p-2">
                            <Book className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-xs font-medium text-slate-500">{item.year}</span>
                        </div>

                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-700 transition-colors duration-200">
                          {item.subject}
                        </h3>

                        <div className="space-y-2 mt-auto">
                          <div className="flex items-center text-sm text-slate-600">
                            <School className="h-3.5 w-3.5 mr-2 flex-shrink-0 text-teal-600" />
                            <span className="truncate">{item.department}</span>
                          </div>

                          <div className="flex items-center text-sm text-slate-600">
                            <Users className="h-3.5 w-3.5 mr-2 flex-shrink-0 text-teal-600" />
                            <span>{item.totalStudents} Students</span>
                          </div>

                          <div className="flex items-center text-sm text-slate-600">
                            <GraduationCap className="h-3.5 w-3.5 mr-2 flex-shrink-0 text-teal-600" />
                            <span>{item.yearSemester}</span>
                          </div>
                        </div>
                      </div>

                      <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default DashboardSemester
