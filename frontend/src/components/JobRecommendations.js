import React from 'react';

const JobRecommendations = () => {
    const jobRoles = [
        {
            title: "Software Developer",
            description: "User needs by employing diagrams and models, writing code, and ensuring overall functionality.",
            imageUrl: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1730918199~exp=1730921799~hmac=08fab0ee6663294d0adea91109ee68a5a9bdeea31cd028100e2b4c72726a0fd7&w=1380"
        },
        {
            title: "Data Analyst",
            description: "Analyze data using statistical techniques and provide insights to inform business decisions.",
            imageUrl: "https://img.freepik.com/free-photo/busy-woman-working-night-front-computer-taking-notes-writing-notebook-annual-reports-checking-financial-project-focused-employee-using-technology-network-wireless-doing-overtime-job_482257-13382.jpg?t=st=1730918256~exp=1730921856~hmac=2c7c8b9d9d3977f18df74a5078bf5bf5ad09a0c7cd8dce1ece3ff280bd32d2c9&w=1380" // Example image URL
        },
        {
            title: "UX Designer",
            description: "Design user-friendly interfaces, focusing on user experience and interface design.",
            imageUrl: "https://img.freepik.com/free-photo/female-web-designer-with-papers-notes-office_23-2149749906.jpg?t=st=1730918316~exp=1730921916~hmac=a508d1a4bc7a166614293b303cd9c012a87a1c8353433b62c2e35617e7b040c9&w=1380" // Example image URL
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Job Role Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobRoles.map((job, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img src={job.imageUrl} alt={job.title} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                            <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobRecommendations;

