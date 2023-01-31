/* eslint-disable import/no-extraneous-dependencies */
import '../App.css';
import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import NavBar from './NavBar';
import photo from '../profile-picture.jpg';
import Toolbox from './Toolbox';
// import About from './About';
import AboutHome from './AboutHome';
import Projects from './Projects';
// import FormMessage from './Form';
import Footer from './Footer';

function App() {
  return (
    <>
      <NavBar />
      <MDBContainer fluid>
        <header className="portfolio-header d-flex flex-md-column flex-lg-row justify-content-evenly text-center">
          <MDBContainer breakpoint="md" className="d-flex justify-content-center position-relative">
            <img
              className="photo"
              src={photo}
              alt="Author"
            />
            <div className="circle-1 rounded-circle position-absolute opacity-70 scale-up-center" />
            <div className="circle-2 rounded-circle position-absolute opacity-70 scale-up-center" />
            <div className="circle-3 rounded-circle position-absolute opacity-70 scale-up-center" />
          </MDBContainer>
          <section className="d-flex flex-column text-lg-start gap-3">
            <h1 className="name-header">Angel Uray</h1>
            <h2 className="description-header">
              I am a
              {' '}
              <span className="career-title">Full-stack Software Developer</span>
              {' '}
              who provides web solutions around the internet remotely, by applying best practices,
              and a growth-mindset.
            </h2>
            <ul className="d-flex justify-content-center justify-content-lg-start list-unstyled">
              <li>
                <a href="https://www.linkedin.com/in/angeluray-jobs">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABg0lEQVR4nO2ZvUoDQRSFN6illZX4Vyp2sk1255xMkdZ2C0FS+A6ptfQhfAGDks7GwlZt9R0EUTEJClYjA4sOq4HsQnZn4B641RyY+907P7tMFIlEIpG3IrkB4ILkmKSpOcYkh2mabldOnuRrA4mbQrzZXEoD5JU3nsSgSgeaWDZmSoyqABifIhIA/qnKI4BLAA8hdqDvWFsAjkMCeLZJu16t9SLJjyAAADwVvVmWLQCYBAFA0iiljgrefkhLyORxA+AMwP28k6cco5x/hVnjJp7M4gewW/QAuCN5BWCf5Gocx0tJkmyRPCH5FQLA4bT5ABx4DzDDnNfeA3S73ZVOp7P335hSquc1gE3cfhrnntPiuNZ6x2sA+/HneD7tDe6Op2m67DUAyVvX02631wqWVgjH6I9HKbU567wCQOlAJEuolGQTw9NTiA1FJACUDpi6l9C46arz9/J8rwIw9AjgvDSAfRnJHxeaTv5Fa71eGsB5pRk4PyF1xshWvnLyIpFIFNWhb7NDG/wgU9MjAAAAAElFTkSuQmCC" alt="LinkedIn" className="media-icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/angeluray">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEoklEQVR4nO1ZS4gdRRTtTIyf+AN/KP5ABWHQ1ehLv+5zuhYzA4MbNz4MuhHMb6OLbCYRoyHBRNcTnWgGXQgR0YgSlQRRRPCTjRBjRBQlMwkaEyeCQmZGwcjFeljvprpfd7+aBOFdKBhe3b73nlv3VzVR1Kc+9alnarVaS7MsawJ4AsAekodJniL5p13y99eyJzxpmsZRFA1E55tI3kzyWZLHSJ6psgAcBbDdGHPTOTccwLUkXyS5UNVwz1oAMGmMueacGJ9l2UMkZwMYrk/kVwArF83woaGhZQB2FRjxO8ndAFZnWXavnJJ8Y7+TE2vIHsnXLG8ekJ3yTWjjl5N8P0fhTyTXCU9FeasAfJ8j870q8ropW+YzHsA8yU2jo6OX9iIbwLiVpeW/G+QkfGED4Gcpm1EgIpkAOO7RM9mr4Ic9Qg9J+YwCU5qmt1jZOqQerCXQJt6s9rw23hhzmayAII4rnSeHh4evrizM1nlX0JwvbEi+ZXmk+66SrlxGfpZl9wHYZ530cvt3AKknJ56v02F1k9rk4xUPKb7P5fTyZI+MjFwpVUZXsqhT/0ZdMCp1bDsedCjIqzY5FeQTW++/BfAbgL8EKIDPZCby8M+5MgcHBy8k+YPi2V7KeAkBz2yzrgDskQBdeMbjmDUenu4DoMS57rBFTUWHQ00A+7RcOXEAfyjeRlcAMu6qj3YXsC8B8E4AAAfGxsYu8tjyuuLdUAbAHiV8dQHvU70az//07NLySa5VfG90BaCTTAYzH1+WZXfby0oQACT/lo6sHLRCgfyqDICO5pU3pwOYCmj8GbtedXU0m83rFICTZQB01H8paTl806EBQFUjyQu1P18ZQF4F8tX/AADmXR0yotQBoG9b3sFNN5pAAI66OpIkub1OCOlO+RLJzbIAbAWwjeRzAL5bBABfknzU3hHWAFhfOYl1GSX5AsknLQiZUZ6xYIqul3XXxzJEWkdNAfi0ThnVg9T+shNrj96f8Dhzv+IZ7wpAHp2U8NNJklzu45UqAeCVAMZP6WrXaDSuEN1lepKmAUkmpeAxxytvk/zAGHOH81tL4rOG8QcBPOAzAsDjine69GuejK7q4yPtWSWO40tkLAbwo2pyS+zTydMyHhd4e87yrJBvfPqtjhn13baoLMnlQfcDUeoAvM2+qH3oDmFxHF/lSTwfiI+EN8ohWzBc/vk4jm8sDcAaOamFJElyj7M/YfcOA9hiS9+BCuEjYXiB1itxrmcsX4J3JQkPee7TcUjyhvac4rlOVl2PuDqTJLmT5C+K50TRaXU7hZWe4//GGHO9BXmXLXUd1aLC+qKtq9ls3qrj3upr1TLeAbHTo3jaDSehvNE6TVPIygFw2indZz3RA9gR9Ur2+e+sa6PkhCR2O4nzvOwAzEvorTng9/pypC6I5QV332npE3ke1wDs3v1dQmtvsMdddRIdlSlnrXW7uTHmYskZx+NvFuUMgB3BPO8jeasMUH1860TPCVuW5K1SnvtCXGrwby5N1C6VvZB0Rxk7fOWvhOEzMh5U7rCLRAMyB8m7jczsdrCbtePIgv37oN0bt1Pl+f83a5/6FP3/6R+bKFJEE2ue4AAAAABJRU5ErkJggg==" alt="Github" className="media-icon" />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@aeucampos">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB30lEQVR4nO2Yv0oDQRjEtxBtBEGwEBSs09hYxOzMbZMiFhYWESyEvEJ8AlsV/2BhYWF6fRAFCwsLCwuLaOULiKiRhQgS7jbfXjxvxR1Icwnz7W+/OQaiVFRUVFRU1DeR7I3yMcbMObznR/VXwzTqAADNLO8kSdaDByB5kOUN4PAvAFw6vK8KB/hSrVZbAvCcI0IvjUZjQg3IPrPf5YzlXprnUAE4yjMwSZLlQS/7LO+tVyqVcZVHJHdy3lg75TK2Co/NTwGQPE/xuggKAMCDY+jToBeArqdHr+gNnEkLLavAAHTK3MCmtNAcBdYqDcDesLTQsgrMGLNQGkD/YPeSQksrMJt/JSzOwgBIng4rtKwCs/lXZQMA2HAN1lpXHQXWKh2A5CzJD8cW2lkFZvOvygbob+HOMfw8rcC+8h8EAMkTxwa6GQXWCQYAQFNyiLT8hwIw43oPXPkPAsAKwK308N/zHwwAyWMPgE5wAFrrtTz5DwagWq1Ok3z3zX8wAP3f3vjmPzSAA9/8/wbAvtRUa73qm38rYezGlK+01oskH6UA9Xp9CsCbT/6thC/+tvifCaFhKgjJa2n+fedQGqdRDAHsSvMfJIDWekWa/yABjDGTJF8l+S8MICoqKirqX+kTg1ZdD4JskU4AAAAASUVORK5CYII=" alt="Medium" className="media-icon" />
                </a>
              </li>
            </ul>
          </section>
        </header>
        <Toolbox />
        <AboutHome />
        <Projects />
      </MDBContainer>
      <Footer />
    </>
  );
}

export default App;
