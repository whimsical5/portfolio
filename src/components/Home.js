import React from "react";
import profileImage from '../assests/file.png';


function Home() {
    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center bg-gray-900"
        >
            <div className="text-center">
                <div className="h-40 w-40 mb-16 rounded-full mx-auto">
                <img
                    src={profileImage}
                    alt="Profile Image"
                />
                </div>
                <h1 className="text-2xl font-bold text-teal-400">Hi, I'm Atharva Jadhav</h1>
                <p className="text-gray-300 text-md mt-4">
                    A Software Developer passionate about building impactful solutions.
                </p>
                <div className="text-xs mt-6 space-x-4">
                    <a
                        href="resumeAtharvaJA.pdf"
                        download
                        className="px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                    >
                        Download Resume
                    </a>
                    <a
                        href="http://www.linkedin.com/in/atharva-jadhav-696245213"
                        className="px-6 py-2 border border-teal-500 text-teal-500 rounded hover:bg-teal-500 hover:text-white"
                    >
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
