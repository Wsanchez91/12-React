import React from 'react';

interface ProjectProps {
    title: string;
    image: string;
    deployed: string;
    repo: string;
}

const Project: React.FC<ProjectProps> = ({ title, image, deployed, repo }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <a href={deployed} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
    );
};

export default Project;
