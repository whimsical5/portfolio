import React from "react";

function Education() {
    const education = [
        {
            institution: "California State University, East Bay",
            degree: "Master of Science (MS), Computer Science",
            duration: "August 2024 - Present",
            gpa: "GPA: 3.58/4.0",
        },
        {
            institution: "University of Pune",
            degree: "Bachelor of Science (BS), Computer Science",
            duration: "August 2018 - May 2022",
            gpa: "GPA: 3.65/4.0",
        },
    ];

    return (
        <section id="education" className="py-20 bg-gray-800">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-6 rounded shadow-lg hover:shadow-xl"
                        >
                            <h3 className="text-xl font-bold text-teal-400">
                                {edu.institution}
                            </h3>
                            <p className="text-gray-300 mt-2">{edu.degree}</p>
                            <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>
                            {edu.gpa && <p className="text-sm text-gray-500 mt-1">{edu.gpa}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
