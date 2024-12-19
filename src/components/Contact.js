import React from "react";

function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-teal-400 mb-6">Contact Me</h2>
                <p className="text-gray-300 text-lg">
                    I'd love to connect with you! Feel free to reach out via email or LinkedIn.
                </p>
                <div className="mt-6 space-y-4">
                    {/* Gmail */}
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                className="w-6 h-6"
                            >
                                <path
                                    fill="#EA4335"
                                    d="M43.611 10.865a4.977 4.977 0 0 0-3.516-1.447H7.905c-1.325 0-2.514.523-3.514 1.447L24 25.653l19.611-14.788z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M43.611 37.135v-21.27L24 25.653l-19.611-9.788v21.27A4.975 4.975 0 0 0 7.905 39h32.189a4.975 4.975 0 0 0 3.516-1.865z"
                                />
                                <path
                                    fill="#FBBC04"
                                    d="M4.39 16.519v20.616A4.975 4.975 0 0 0 7.905 39H24V25.653L4.39 16.519z"
                                />
                                <path
                                    fill="#4285F4"
                                    d="M43.611 16.519v20.616A4.975 4.975 0 0 1 40.094 39H24V25.653L43.611 16.519z"
                                />
                            </svg>
                        </div>
                        <a
                            href="mailto:jadhavatharva28@gmail.com"
                            className="text-gray-300 text-lg hover:text-teal-400"
                        >
                            jadhavatharva28@gmail.com
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-6 h-6"
                                fill="#0A66C2"
                            >
                                <path d="M100.28 448H7.4V148.9h92.88zm-46.14-340a53.29 53.29 0 1 1 53.29-53.3 53.3 53.3 0 0 1-53.3 53.3zm394.74 340h-92.68V302.4c0-34.7-12.48-58.3-43.67-58.3-23.82 0-38 16-44.3 31.4-2.27 5.5-2.84 13.2-2.84 21V448H176.1s1.25-236.3 0-260.5h92.7v36.9c-.19.3-.47.6-.66.9h.66v-.9c12.32-19 34.37-46.1 83.72-46.1 61.1 0 106.9 39.9 106.9 125.7V448z" />
                            </svg>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/atharva-jadhav"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 text-lg hover:text-teal-400"
                        >
                            Atharva Jadhav
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
