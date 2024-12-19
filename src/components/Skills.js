import React from "react";

function Skills() {
    const skills = [
        "Angular JS",
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Python",
        "MongoDB",
        "Rust",
        "Swift",
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-4 rounded text-center text-white shadow-md hover:bg-teal-400"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
