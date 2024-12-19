import React from "react";

function Projects() {
    const projects = [
        {
            name: "FaceInsights",
            description: "Web app for sentiment analysis using Google Vision API.",
            techStack: "React, Node.js, Firebase",
        },
        {
            name: "Meet Artist",
            description: "Platform for artists to share their work and events.",
            techStack: "AngularJS, MongoDB, Node.js",
        },
        {
            name: "Animal Rescue Team",
            description: "Android app for reporting and rescuing abused animals.",
            techStack: "Android Studio",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-6 rounded shadow-lg hover:shadow-xl"
                        >
                            <h3 className="text-xl font-bold text-teal-400">{project.name}</h3>
                            <p className="text-gray-300 mt-2">{project.description}</p>
                            <p className="text-sm text-gray-500 mt-1">{project.techStack}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
