import React from "react";

function Header() {
    return (
        <header className="bg-gray-800 shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">Atharva Jadhav</h1>
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-teal-400">About</a>
                    <a href="#skills" className="hover:text-teal-400">Skills</a>
                    <a href="#projects" className="hover:text-teal-400">Projects</a>
                    <a href="#contact" className="hover:text-teal-400">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
