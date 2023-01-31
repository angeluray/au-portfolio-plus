/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ProjectCardItem from './ProjectCardItem';
import Mv from '../assets/mv-desktop.png';
import Hotelator from '../assets/hotelator-desktop.png';
import SpaceTravelers from '../assets/space-travelers-tablet.png';
import Budged from '../assets/twosave-all-categories.png';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'MV Searcher',
      image: Mv,
      description: 'MV Searcher is a web application that allows you to search for different movies and series to check their rating, genre, description, and general information in real-time (including shooting status). In addition, all users can interact with the application by leaving comments, "like" or "dislike", or simply search for movie and series recommendations for fun.',
      cardImage: Mv,
      cardDescription: 'MV Searcher is a web application that allows you to search for different movies and series to check their rating, genre, description, and general information in real-time (including shooting status).',
      liveSource: 'https://github.com/angeluray/MV-Searcher-CP',
      liveDemo: 'https://mov305.github.io/moviesC2/dist/',
      tools: ['Javascript', 'Webpack', 'Jest', 'CSS', 'Tailwind', 'APIs'],
    },
    {
      id: 2,
      title: 'Hotelator',
      image: Hotelator,
      description: 'It offers a way to set up or delete hotel reservations by choosing one of the many hotel rooms available worldwide. The only requirement is to register and log in to book your next destination. Once you become a user of Hotelator, you also have access to add and delete hotels if you are an owner. All hotels must have an appropriate name, description, and current rating, so users know how comfortable their experience there will be.',
      cardImage: Hotelator,
      cardDescription: 'It offers a way to set up or delete hotel reservations by choosing one of the many hotel rooms available worldwide. The only requirement is to register and log in to manage your next destination.',
      liveSource: 'https://github.com/angeluray/hotel-booking-backend',
      liveDemo: 'https://inspiring-kashata-9d9dfc.netlify.app/',
      tools: ['Rails', 'React', 'Redux', 'PostgreSQL', 'RSpec', 'Tailwind'],
    },
    {
      id: 3,
      title: "Space Traveler's hub",
      image: SpaceTravelers,
      description: 'It is a single-page application that consumes real-life SpaceX data and offers commercial and scientific space travel services, allowing users to book any available rocket and join selected space missions. Rockets and missions you books will appear in the "My Profile" section.',
      cardImage: SpaceTravelers,
      cardDescription: 'It is a single-page application that consumes real-life SpaceX data and offers commercial and scientific space travel services for users to book any available rocket and join selected space missions.',
      liveSource: 'https://github.com/angeluray/gp-space-travelers',
      liveDemo: 'https://darling-baklava-e2b8d5.netlify.app/',
      tools: ['React', 'Redux', 'RactBootstrap', 'Jest', 'ReactRouterDom', 'APIs'],
    },
    {
      id: 4,
      title: '2SAVE',
      image: Budged,
      description: 'A budgeting application that will keep track of all your expenses based on categories created by you within the application and return the total amount of money you have spent by category while keeping you up to date.Creating transactions is easy. All you need to do is have a category, for example, Shopping, then you can record a transaction by name like "Shoes Purchased - Dolphin Mall" and set the amount of money you spent, click create, and all done. The whole application will take care of the calculations.',
      cardImage: Budged,
      cardDescription: 'A budgeting application that will keep track of all your expenses based on categories created by you within the application and return the total amount of money you have spent by category while keeping you up to date.',
      liveSource: 'https://github.com/angeluray/to-save-cp',
      liveDemo: 'https://www.youtube.com/watch?v=mc_qPIxRP-s&feature=youtu.be',
      tools: ['Rails', 'PostgreSQL', 'RSpec', 'Capybara', 'CSS', 'Turbo'],
    },
  ];
  return (
    <>
      <div className="d-flex justify-content-center mb-4 pt-5" id="work-portfolio">
        <hr className="devider" />
        <h3 className="h3-title">My featured projects</h3>
        <hr className="devider" />
      </div>
      <div className="p-3 mb-5 d-flex flex-wrap flex-md-column justify-content-md-center flex-lg-row gap-4 col-lg-10 m-lg-auto">
        { projectsData.map((project) => <ProjectCardItem key={project.id} project={project} />)}
      </div>
    </>
  );
};

export default Projects;
