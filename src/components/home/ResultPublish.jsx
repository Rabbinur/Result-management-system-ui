const ResultPublish = () => {
  const results = [
    {
      id: 1,
      department: "Computer Science and Engineering",
      semester: 4,
      exam_name: "Internal Filan Examination",
      text_color: "#00661D",
      background: "#DEF7E5",
      images: [
        "https://images.unsplash.com/photo-1558531304-a4773b7e3a9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3YlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        "  https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1558531304-a4773b7e3a9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3YlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        " https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      ],
      student_count: 50,
    },
    {
      id: 2,
      department: "Bachelor of Business Administration ",
      semester: 5,
      exam_name: "Final Exam",
      text_color: "#00661D",
      background: "#DEF7E5",
      images: [
        "https://images.unsplash.com/photo-1558531304-a4773b7e3a9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3YlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        "  https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1558531304-a4773b7e3a9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3YlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        " https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      ],
      student_count: 40,
    },
    {
      id: 3,
      department: "Tourism & Hospitality Management",
      semester: 8,
      exam_name: "Internal Filan Examination",
      text_color: "#00661D",
      background: "#DEF7E5",
      images: [
        "https://images.unsplash.com/photo-1558531304-a4773b7e3a9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3YlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        "  https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1558531304-a4773b7e3a9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3YlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        " https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      ],
      student_count: 70,
    },
  ];
  return (
    <>
      <section>
        <h1 className="text-2xl font-semibold">Result Published</h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
          {results.map((item, i) => (
            <>
              <div
                className={`${(i + 1) % 2 == 1 ? " bg-[#DEF7E5]" : "bg-[#D8CDED]"
                  }  px-8 py-4 rounded-lg max-w-[420px]`}
                key={item.id}
              >
                <h3
                  className={`${(i + 1) % 2 == 1 ? "text-[#00661D] " : "text-[#7E57C2]"
                    } text-xl font-semibold`}
                >
                  {item.department}
                </h3>
                <p className="text-sm mt-2 font-normal">
                  {item.semester}th Semester
                </p>
                <p className="text-sm  font-normal">{item.exam_name}</p>

                <div className="flex items-center  relative mt-4">
                  <div className="flex items-center max-h-[200px]  relative  max-w-[250px] ">
                    {item.images.map((image, i) => {
                      return (
                        <>
                          <div
                            style={{
                              backgroundImage: `url(${image})`,

                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            className={`w-[50px] h-[50px] relative rounded-full ${i == 1 && "left-[-15px]"
                              } ${i == 2 && "left-[-30px]"} ${i == 3 && "left-[-45px]"
                              }
                            ${i == 4 && "left-[-60px]"}

                             
                            
                            `}
                          ></div>
                        </>
                      );
                    })}
                  </div>
                  <div className="text-sm ml-[-30px] font-normal">
                    and {item.student_count} Students
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default ResultPublish;
