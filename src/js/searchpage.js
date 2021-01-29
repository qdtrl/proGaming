import {arrayInString, imagePlatforms, fillCardGame} from './function';

const SearchPage = (argument = "") => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + '?search=' + argument + '&page_size=27';
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
      <section class="page-list" style="justify-content: center;">
        <div class="articles">
          <div class="loader">
            <span class="loader-icon"></span> Chargement...
          </div>
        </div>
      </section>
    `;

    preparePage();
  };
  render();
};

export {SearchPage};