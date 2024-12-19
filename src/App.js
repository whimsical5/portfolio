import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-gray-900 text-white">
            {/* Header Navigation */}
            <Header />

            {/* Main Sections */}
            <main>
                {/* Hero Section */}
                <Home />

                {/* About Section */}
                <About />

                {/* Skills Section */}
                <Skills />

                {/* Projects Section */}
                <Projects />

                {/* Experience Section */}
                <Experience />

                {/* Education Section */}
                <Education />

                {/* Contact Section */}
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
