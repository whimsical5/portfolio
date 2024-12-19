import React from "react";

function Experience() {
    const experiences = [
        {
            company: "Cybage Software Pvt Ltd",
            role: "Software Engineer",
            duration: "September 2022 - July 2024",
            details: [
                "Updated and optimized websites using Angular and JavaScript.",
                "Performed web crawls to update logos during rebranding.",
                "Managed technical support for a client’s event launch.",
            ],
        },
        {
            company: "National Service Scheme",
            role: "Student Volunteer",
            duration: "September 2019",
            details: [
                "Coordinated distribution of essential supplies during floods.",
                "Participated in clearing roads for relief operations.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-gray-900">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded shadow-lg hover:shadow-xl"
                        >
                            <h3 className="text-xl font-bold text-teal-400">{experience.company}</h3>
                            <p className="text-gray-300 mt-2">{experience.role}</p>
                            <p className="text-sm text-gray-500 mt-1">{experience.duration}</p>
                            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                                {experience.details.map((detail, detailIndex) => (
                                    <li key={detailIndex}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
