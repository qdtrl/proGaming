const Home = (argument = "") => {
  const preparePage = () => {
    let articles = "";
    let cleanedArgument = argument.replace(/\s+/g, "-");

    const imagePlatforms = platforms => {
      let platformsAvalaible = "";
      platforms.forEach(platform  => {
        switch(platform.platform.name) {
          case "Linux":
            platformsAvalaible += `<img src="./src/images/linux.svg" alt="icon-linux">`
            break;
          case "PC":
            platformsAvalaible += `<img src="./src/images/windows.svg" alt="icon-pc">`
            break;
          case "Xbox":
            platformsAvalaible += `<img src="./src/images/xbox.svg" alt="icon-xbox">`
            break;
          case "PlayStation":
            platformsAvalaible += `<img src="./src/images/ps4.svg" alt="icon-ps4">`
            break;
          case "Nintendo":
            platformsAvalaible += `<img src="./src/images/switch.svg" alt="icon-switch">`
            break;
          case "Android":
            platformsAvalaible += `<img src="./src/images/mobile.svg" alt="icon-mobile">`
            break;
          default:
            break;
        }
      });
      return platformsAvalaible;
    }

    const fetchList = (url, argument) => {
      let finalURL = url;
      if (argument) {
        finalURL = url + "?search=" + argument;
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
            articles += `
                  <div class="cardGame">
                    <img src="${article.background_image}" alt="${article.slug}">
                    <h1>${article.name}</h1>
                    <div class="platform">
                      ${imagePlatforms(article.parent_platforms)}
                    </div>
                  </div>
                `;
          });
        document.querySelector(".page-list .articles").innerHTML = articles;
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