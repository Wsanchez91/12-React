import React from 'react';
import Project from '../components/Project';

const projects = [
    { title: "Project One", image: "/project1.jpg", deployed: "#", repo: "#" },
    { title: "Project Two", image: "/project2.jpg", deployed: "#", repo: "#" },
];

const Portfolio: React.FC = () => {
    return (
        <section>
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((proj, index) => (
                    <Project key={index} {...proj} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
