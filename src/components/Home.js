import React from "react";
import profileImage from '../assests/file.png';


function Home() {
    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center bg-gray-900"
        >
            <div className="text-center">
                <img
                    src={profileImage}
                    alt="Profile Image"
                    className="w-32 h-32 mx-auto shadow-md border-1 border-gray-300"
                />

                <h1 className="text-5xl font-bold text-teal-400">Hi, I'm Atharva Jadhav</h1>
                <p className="text-gray-300 text-lg mt-4">
                    A Software Developer passionate about building impactful solutions.
                </p>
                <div className="mt-6 space-x-4">
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
