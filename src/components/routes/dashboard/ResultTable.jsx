/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ResultTable = ({ studentData }) => {
  return (
    <>
      <div className="" style={{ overflow: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "separate" }}>
          <thead>
            <tr className="">
              <th
                className="border-b border-b-black"
                style={{ padding: "10px" }}
              >
                Name
              </th>
              <th
                className="border-b border-b-black ml-4"
                style={{ padding: "10px" }}
              >
                Student ID
              </th>
              <th
                className="border-b border-b-black"
                style={{ padding: "10px" }}
              >
                Registration ID
              </th>
              <th
                className="border-b border-b-black"
                style={{ padding: "10px" }}
              >
                Marks
              </th>
              <th
                className="border-b border-b-black"
                style={{ padding: "10px" }}
              >
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr
                className="mt-4"
                key={index}
                style={{ borderBottom: "1px solid black" }}
              >
                <td
                  className="  items-center  mt-3 flex gap-6"
                  style={{ padding: "10px" }}
                >
                  <div
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D)`,

                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="w-[40px] h-[40px] border border-[#00E8BE] rounded-full"
                  ></div>
                  <div>{student.name}</div>
                </td>
                <td className="text-center" style={{ padding: "10px" }}>
                  {student.studentId}
                </td>
                <td className="text-center" style={{ padding: "10px" }}>
                  {student.registrationId}
                </td>
                <td className="text-center" style={{ padding: "10px" }}>
                  {student.marks}
                </td>
                <td className="text-center" style={{ padding: "10px" }}>
                  {student.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResultTable;
