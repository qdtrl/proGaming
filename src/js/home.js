import {fillCardGame} from './function';

const Home = (argument = "") => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument;
      }

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
      <form>
          <input id="searchInput" type="search" placeholder="Search" aria-label="Search">
          <button onclick="setRoute()" type="submit">Submit</button>
      </form>
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
};

export {Home};