import { Link, useParams } from "react-router-dom";

const SemesterResult = () => {
  const departmentData = [
    // Data for 2022
    {
      id: 1,
      year: 2022,
      department: "Computer Science",
      subject: "Computer Networks",
      totalStudents: 28,
    },
    {
      id: 2,
      year: 2022,
      department: "Computer Science",
      subject: "Data Structures",
      totalStudents: 25,
    },
    {
      id: 3,
      year: 2022,
      department: "Mathematics",
      subject: "Calculus",
      totalStudents: 27,
    },
    {
      id: 4,
      year: 2022,
      department: "Mathematics",
      subject: "Linear Algebra",
      totalStudents: 22,
    },
    {
      id: 5,
      year: 2022,
      department: "Physics",
      subject: "Classical Mechanics",
      totalStudents: 24,
    },
    {
      id: 6,
      year: 2022,
      department: "Physics",
      subject: "Quantum Physics",
      totalStudents: 20,
    },

    // Data for 2023
    {
      id: 7,
      year: 2023,
      department: "Computer Science",
      subject: "Algorithms",
      totalStudents: 30,
    },
    {
      id: 8,
      year: 2023,
      department: "Computer Science",
      subject: "Machine Learning",
      totalStudents: 26,
    },
    {
      id: 9,
      year: 2023,
      department: "Mathematics",
      subject: "Statistics",
      totalStudents: 28,
    },
    {
      id: 10,
      year: 2023,
      department: "Mathematics",
      subject: "Discrete Mathematics",
      totalStudents: 27,
    },
    {
      id: 11,
      year: 2023,
      department: "Physics",
      subject: "Thermodynamics",
      totalStudents: 23,
    },
    {
      id: 12,
      year: 2023,
      department: "Physics",
      subject: "Electrodynamics",
      totalStudents: 21,
    },

    // Data for 2024
    {
      id: 13,
      year: 2024,
      department: "Computer Science",
      subject: "Artificial Intelligence",
      totalStudents: 29,
    },
    {
      id: 14,
      year: 2024,
      department: "Computer Science",
      subject: "Cybersecurity",
      totalStudents: 24,
    },
    {
      id: 15,
      year: 2024,
      department: "Computer Architecture",
      subject: "Computer Science",
      totalStudents: 30,
    },
    {
      id: 16,
      year: 2024,
      department: "Mathematics",
      subject: "Differential Equations",
      totalStudents: 25,
    },
    {
      id: 17,
      year: 2024,
      department: "Physics",
      subject: "Optics",
      totalStudents: 26,
    },
    {
      id: 18,
      year: 2024,
      department: "Physics",
      subject: "Nuclear Physics",
      totalStudents: 22,
    },
  ];

  const { id } = useParams();
  return (
    <>
      <main className="m-10">
        {/* 2024 */}
        <section>
          <h1 className="font-bold text-3xl">Year - 2024</h1>
          <div className="flex mt-6 items-center flex-wrap gap-x-10 gap-y-5">
            {departmentData.flatMap((item) =>
              item.year === 2024 ? (
                <>
                  <Link to={`/dashboard/semester/${id}/result/${item.id}`}>
                    <div
                      className="bg-[#DEF7E5] rounded-lg p-5 w-[300px]"
                      key={item.id}
                    >
                      <h3 className="text-xl font-medium">{item.subject}</h3>
                      <p className="text-base">
                        {id % 4 == 0 ? 4 : id % 4} year and {id} Semester
                      </p>
                      <p className="text-[#333333] text-sm">
                        {item.department}
                      </p>
                      <p className="text-[#333333] text-sm">
                        {item.totalStudents}
                      </p>
                    </div>
                  </Link>
                </>
              ) : (
                []
              )
            )}
          </div>
        </section>

        {/* 2023 */}
        <section className="mt-10">
          <h1 className="font-bold text-3xl">Year - 2023</h1>
          <div className="flex mt-6 items-center flex-wrap gap-x-10 gap-y-5">
            {departmentData.flatMap((item) =>
              item.year === 2023 ? (
                <>
                  <Link to={`/dashboard/semester/${id}/result/${item.id}`}>
                    <div
                      className="bg-[#D8CDED] rounded-lg p-5 w-[300px]"
                      key={item.id}
                    >
                      <h3 className="text-xl font-medium">{item.subject}</h3>
                      <p className="text-base">
                        {id % 4 == 0 ? 4 : id % 4} year and {id} Semester
                      </p>
                      <p className="text-[#333333] text-sm">
                        {item.department}
                      </p>
                      <p className="text-[#333333] text-sm">
                        {item.totalStudents}
                      </p>
                    </div>
                  </Link>
                </>
              ) : (
                []
              )
            )}
          </div>
        </section>
        {/* 2022 */}
        <section className="mt-10">
          <h1 className="font-bold text-3xl">Year - 2022</h1>
          <div className="flex mt-6 items-center flex-wrap gap-x-10 gap-y-5">
            {departmentData.flatMap((item) =>
              item.year === 2022 ? (
                <>
                  <Link to={`/dashboard/semester/${id}/result/${item.id}`}>
                    <div
                      className="bg-[#DEF7E5] rounded-lg p-5 w-[300px]"
                      key={item.id}
                    >
                      <h3 className="text-xl font-medium">{item.subject}</h3>
                      <p className="text-base">
                        {id % 4 == 0 ? 4 : id % 4} year and {id} Semester
                      </p>
                      <p className="text-[#333333] text-sm">
                        {item.department}
                      </p>
                      <p className="text-[#333333] text-sm">
                        {item.totalStudents}
                      </p>
                    </div>
                  </Link>
                </>
              ) : (
                []
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default SemesterResult;
