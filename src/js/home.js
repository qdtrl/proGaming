import {fillCardGame} from './function';
import {routes} from './routes';

const Home = (argument = "") => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchList = (url, argument) => {
      let finalURL = url + '?search=&page_size=27';

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          document.querySelector(".page-list .articles").innerHTML = fillCardGame(response.results);
        });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
    <section class="jumbotron">
      <h1>Pro <span>Gaming</span></h1>
      <div>
        <form>
            <input class="searchInput" type="search" placeholder="Search..." aria-label="Search">
            <button class="searchButton" type="submit">Submit</button>
        </form>
      </div>
    </section>
    <section class="page-list" style="justify-content: center;">
      <div class="articles">
        <div class="loader">
          <span class="loader-icon"></span>
          Chargement...
        </div>
      </div>
    </section>
    `;
    preparePage();
  };
  render();
  var searchInput = document.querySelector('form input');
  var searchButton = document.querySelector('form button');


  searchButton.addEventListener('click', e => {
    e.preventDefault();
    routes["search"](searchInput.value);
  })
};

export {Home};