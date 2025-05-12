"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// This would be your actual data source
const mockStudentData = [
    {
        id: "ST001",
        name: "John Doe",
        registrationId: "REG2023001",
        department: "Computer Science",
        semester: "3rd",
        imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: "ST002",
        name: "Jane Smith",
        registrationId: "REG2023002",
        department: "Electrical Engineering",
        semester: "2nd",
        imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: "ST003",
        name: "Michael Johnson",
        registrationId: "REG2023003",
        department: "Civil Engineering",
        semester: "4th",
        imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    },
]

const SearchResults = () => {
    const { query } = useParams()
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate API call with a delay
        setLoading(true)
        setTimeout(() => {
            // Filter students based on search query
            const filteredResults = mockStudentData.filter(
                (student) =>
                    student.id.toLowerCase().includes(query.toLowerCase()) ||
                    student.name.toLowerCase().includes(query.toLowerCase()) ||
                    student.registrationId.toLowerCase().includes(query.toLowerCase()),
            )
            setResults(filteredResults)
            setLoading(false)
        }, 800)
    }, [query])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00E8BE]"></div>
            </div>
        )
    }

    if (results.length === 0) {
        return (
            <div className="mt-10 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h2 className="text-2xl font-semibold text-slate-700 mb-2">No results found</h2>
                <p className="text-slate-500">We couldn't find any students matching "{query}"</p>
            </div>
        )
    }

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-6">Search Results for "{query}"</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((student) => (
                    <div
                        key={student.id}
                        className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="h-24 bg-gradient-to-r from-[#00E8BE] to-[#00BB35] relative">
                            <div
                                className="absolute bottom-0 left-6 transform translate-y-1/2 w-20 h-20 rounded-full border-4 border-white bg-cover bg-center"
                                style={{ backgroundImage: `url(${student.imageUrl})` }}
                            ></div>
                        </div>

                        <div className="pt-12 pb-6 px-6">
                            <h3 className="text-xl font-semibold mb-1">{student.name}</h3>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2 py-1 bg-[#F0FDF4] text-[#00BB35] text-xs font-medium rounded-full">
                                    {student.semester} Semester
                                </span>
                                <span className="text-slate-500 text-sm">{student.department}</span>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Student ID:</span>
                                    <span className="font-medium">{student.id}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Registration:</span>
                                    <span className="font-medium">{student.registrationId}</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="w-full py-2 bg-gradient-to-r from-[#00E8BE] to-[#00BB35] text-white rounded-md hover:opacity-90 transition-opacity">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults
