import React from "react";

function Skills() {
    const skills = [
        { name: "Angular JS", percent: 90 },
        { name: "React", percent: 90 },
        { name: "JavaScript", percent: 95 },
        { name: "HTML", percent: 95 },
        { name: "CSS", percent: 95 },
        { name: "Bootstrap", percent: 90 },
        { name: "Python", percent: 85 },
        { name: "MongoDB", percent: 80 },
        { name: "Rust", percent: 70 },
        { name: "Swift", percent: 60 },
    ];

    return (
        <section id="skills" className="ml-30 mr-30 py-20 bg-gray-900">
            <div className="container mx-auto">
                <h2 className="text-xl font-bold text-teal-400 mb-6 text-center">Skills</h2>
                <div className="ml-7 mr-7 grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="relative group text-sm bg-gray-800 p-4 rounded text-center text-white shadow-md hover:bg-teal-400"
                        >
                            {/* Skill Name */}
                            <div className="skill-name text-sm transition-opacity duration-300 group-hover:opacity-0">
                                {skill.name}
                            </div>

                            {/* Percentage Overlay (show on hover) */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-xl text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {skill.percent}%
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
