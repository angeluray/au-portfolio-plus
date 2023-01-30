/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ProjectCardItem from './ProjectCardItem';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'First project',
      image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      description: 'Lorem impsun',
      cardImage: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      cardDescription: 'Lorem impusn',
      liveSource: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      liveDemo: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    },
    {
      id: 2,
      title: 'Second project',
      image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      description: 'Lorem impsun',
      cardImage: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      cardDescription: 'Lorem impusn',
      liveSource: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      liveDemo: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    },
    {
      id: 3,
      title: 'Third project',
      image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      description: 'Lorem impsun',
      cardImage: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      cardDescription: 'Lorem impusn',
      liveSource: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      liveDemo: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    },
    {
      id: 4,
      title: 'Fourth project',
      image: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      description: 'Lorem impsun',
      cardImage: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      cardDescription: 'Lorem impusn',
      liveSource: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      liveDemo: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
    },
  ];
  return (
    <>
      <div className="d-flex justify-content-center mb-4 pt-5">
        <hr className="devider" />
        <h3 className="h3-title">My featured projects</h3>
        <hr className="devider" />
      </div>
      <div className="p-3 mb-5 d-flex flex-wrap flex-md-column justify-content-md-center gap-4">
        { projectsData.map((project) => <ProjectCardItem key={project.id} project={project} />)}
      </div>
    </>
  );
};

export default Projects;
