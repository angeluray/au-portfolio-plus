/* eslint-disable import/no-extraneous-dependencies */
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import photo from '../profile-picture.jpg';
import Toolbox from './Toolbox';
// import About from './About';
import AboutHome from './AboutHome';
import Projects from './Projects';
import FormMessage from './Form';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="portfolio-header">
        <div className="circle" />
        <div className="circle" />
        <section>
          <div className="my-profile-photo">
            <img
              className="photo"
              src={photo}
              alt="Author"
            />
          </div>
          <h1>Angel Uray</h1>
          <h2>
            I am a
            {' '}
            <span>Full-stack Software Developer</span>
            {' '}
            who provides web solutions around the internet.
          </h2>

          <ul className="d-flex list-unstyled">
            <li>
              <a href="https://www.linkedin.com/in/angeluray-jobs">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfElEQVR4nO2ZsUoDQRCGV9TSyko0Wip2vocvIIiF75BaSx/CFzAo6WwsbNVW30G47P6/m6BgNbJwMWHlMJeQu12YH6bagfu/2bm9PcYYlUqlSlbOuQ6AW5JDktJwDAH0vff7i5h3LRiX6UAw4VynNkBZ+VbNcwLRqw3QUttIRfh5ACSlMArAP1V5A3BH8jXHHeiO80RkBcBFNgAAimB6OldE1kh+ZgFA8j3OFZFVkqNcAITkeZTbzaaFOGmlRwDXAF6WbZ56jHL5FWaDOzCaJd9aexjnAHgmeQ/guCiKLRFZB7BH8hLAdw4Ap1XPc86dJA/wnwA8JA/gvd8keVQBcJY0QDAersZhHcBVvD4YDA6SBigvf+Ocr/AFjwA2Ugd4inK2p9fDHSuHY/Q3B8DurM9VAOoOGG2hWtKX2KZ7CkkbYRSAugPSdAsN2646J/FRGyAMFxIwLuVpdVMbIExGwnAhAfPWWrtjFpjS9MY/IQ2HD5Wf27xKpVKZJvQDH/sNR7ZHHu0AAAAASUVORK5CYII=" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://github.com/angeluray">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqUlEQVR4nO1ZS4tcRRS+ie83+ELxBSq40Z2Jz1/gxo1B0Y2gUTe6cGMUdYKDE11PdBITdCFERCNKjCQERQQf2QhRI6LoZDqOY3ff+k7dHshMFCz5mGqsW6m6fV8TFfrAgaHr3POoOnXOV2eSZExjGlNjMsacopS6DcAzAHaLyGGs0B+WISLfcY0yaZreaoxZm/zbpJS6CsBLIvKriJiKfFREtqRpeuVJd3wwGFwCYDuA4zUczzFWdMwMBoOLT4rzAO4HoJo6HggkVUrdt2qOG2NOA7CjwImBiOwSkY1a63U8JX5D5t9a6/VcE5G3rGwskG38plXn5+fnzxaRjyJGf1NKPUaZivoeBvBTROfeKvoKibsRch7AMoDnFhYWzmmiW2v9FHUFgviwlZOIpM0Cy2bSEimlbgfwe8DOTFPnHwgo/Zblsy3nhwTgaur27Wmt700alEoV2Pmc891u91xy0lIQ8E4CQD/LsovqKNvuKVoKpQ2A96zMYV5MduUy+pVSdwHYx00C8Lrz+x2BO/FKnQ6ba1K8sJFA+56xL3l6Md0ALmCV8StZkpd52i8YlTq2hQc5A7FqE6kgn7HeA/iBMAjAnzbQL4iJAhVtydVpjDkdwM+e3JZSzjMFfGzDOh+TF5EjLXTijq9Xa/2IL1MKADLP/Q5b1FQC6VAHRuzz9fLERWTRq0jrRwZAuOsZ2BWTNcasEZEPWgjgoDHmjIAvb3tym8oEsNszsLFA9vkW0sdY53b4+rXWj3oy74wMwL9kBGYR52/iY6XFAP5iR3ZtZFl2iyf3TZkTyDWvGE4HsLMt5+UfftO1sbi4eKkXZL9MALn6z5IWkhORuVUIoOPa4L3wAliuHECsAkXqf9M0WnZtEKLUCSCXQjHgFmg0bfBR14bW+rrKKeRfYgCvichmy5MiMgXgZQA/rsIJfC0iD/GNYBvZk3UusV9GXwXwLAOwGOVF+3fR87Iuf2pB5KQtEp9XLqMBILW/LGJtyNMB/ftdGZ7MyAA4dPIUH+v3++eFZFklALzRQurs9Ktdmqbn03aZnuQ7tdYOnVwDjw/XReR9AAe01tcPf9Nab2B+1nD+kIjcEzndJzzZudLTPEJX7+MjQ6zS6XTOIiwG8Ivb5IiLCLYATBAeF+z2EmXYZY0xa0L2rY2O9+1UUpb4eAg8aCacHb+W6wA+dkGY1vpC/+JFgviEskl8AzcHHjRXlA7AKpnxlWitb3bWp52n5At2PHKwQt4fMMac6ttlngcw1gkXfCQxPTju8/Ow1+tdPsQpgedkVX7QtZll2Q0Aul6gvaLTKiTOKgNGv+92u5fZ9RttqctViwqn8NXQFoBrAnnPyrOhlvOO4m0B43NuOlm5ILQGcCc5EsQxp3SHRvRbk5ZGi3sjo8WJ4SWO7fJQT8FJTEaC3xO6I7XIDmNjb9859onYjvsB2PW7R6TXntaGu95J5CpTiPkMdLv57OzsmbwzTgDvjrgzW1vb+RBxVtlC9QndlV7jC1uWOKvkuK+NRw1WdEzXLpVNiN3Rwo4Tyl8J5jdTlTvsahBBlsVBm4jZCezs0Pa4Zb7yDnHNPlbW/Sf+zTqmMSX/f/ob9fX9hx5LC0kAAAAASUVORK5CYII=" alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@aeucampos">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB00lEQVR4nO2YsUrDUBSG7yC6CILgICj0DVwc9BEcHBwUHIS+Qn0CVxWrODg42L0+iIKDg4ODg0N1aM39z6GTiHolkEIpyc25iTEXvB90aco590v+8EOVCgQCgUBgDCIyZT5RFC2pDLTWy2XnqzzKLmDm7azZzLzjvQCAdtZsAKfeCxDRjUXgtnKBEcy8CuCtwBN4N8bMqAni7+JrBZ/qcdrMXIjorMhCrfX65Kz4u6J33RgzrYoA4LDg0lbKzdivPDa/JQCgmzLr2isBAM+Wpa+Ts4io5zjDVC1wJS20rAID0KlTYE9aaJYCa9YmEN9haaFZCqxRm0By/UlSaGkFFudfCYuzSoHLvELLKrA4/6puAa31rm1xFEVrlgJr1i4wGAwWAXxblrcsBdaoXSA5wKMlRt20Ahvl3xeBC8vyXkaBdbwRYOZtySHS8u+FwHA4XMh5DzLz74VAcogH6eHH8++TwLmDQMdHga0i+fdGgJnnAXy55t8bgeS39675902g7Zr/vxA4cRDYdM2/VMAYM6VcAbBCRC8OAnMAPl3yHyN8bw7E/0wIB6aKALiT5t91D0njVFLgSJp/LwW01hvS/Hsp0O/3ZwF8SPJfmUAgEAgE/hU/TlFq7R6AMFIAAAAASUVORK5CYII=" alt="Medium" />
              </a>
            </li>
          </ul>
        </section>
      </header>
      <Toolbox />
      <AboutHome />
      <Projects />
      <FormMessage />
    </div>
  );
}

export default App;
