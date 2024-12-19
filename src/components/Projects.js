import React from "react";

function Projects() {
    const projects = [
        {
            name: "FaceInsights",
            description: "Web app for sentiment analysis using Google Vision API.",
            techStack: "React, Node.js, Firebase",
            link: "https://face-insights-vp7o.vercel.app/", // Add your URL here
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
                <h2 className="text-xl font-bold text-teal-400 mb-6 text-center">Projects</h2>
                <div className="ml-10 mr-10 grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-6 rounded shadow-sm hover:shadow-xl"
                        >
                            <h3 className="text-sm font-bold text-teal-400 hover:text-blue-600">
                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.name}
                                    </a>
                                ) : (
                                    project.name
                                )}
                            </h3>
                            <p className="text-xs text-gray-300 mt-2">{project.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{project.techStack}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
