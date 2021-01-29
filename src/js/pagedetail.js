import {arrayInString, dateInString, arrayInLink, fillCardGame} from './function';

const PageDetail = (argument) => {
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    const getScreenShots = (id, game) => {
      fetch(`https://api.rawg.io/api/games/${id}/screenshots`)
        .then((response) => response.json())
        .then((response) => {
          let imgString = "";
          response.results.forEach( screen => {
            imgString += `
            <div class="cardGame">
              <img class="game" src="${screen.image}" alt="${game}">
            </div>`;
          });
          pageContent.querySelector('div.screenshots').innerHTML = imgString;
        })
    };
    const getYoutube = (id, game) => {
      fetch(`https://api.rawg.io/api/games/${id}/youtube`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        let youtubeHtml = `
        <div class="big">
          <img src="${response.results[0].thumbnails.maxresdefault.url}" alt="${game}">
          <div>
            <h3>${response.results[0].name}</h3>
            <p>
              <a href="https://www.youtube.com/channel/${response.results[0].channel_id}">${response.results[0].channel_title}</a> - ${dateInString(response.results[0].created)}
            </p>
          </div>
        </div>
        <div class="youtube">`;
        response.results.slice(1,4).forEach(video => {
          youtubeHtml += `
          <div class="cardYoutube">
              <img src="${video.thumbnails.medium.url}" alt="${game}">
              <h3>${video.name}</h3>
              <p>
                <a href="https://www.youtube.com/channel/${video.channel_id}">${video.channel_title}</a>- ${dateInString(video.created)}
              </p>
          </div>`;
        });
        youtubeHtml += '</div>';
        pageContent.querySelector("section.youtube").innerHTML = youtubeHtml;
      })
    };
    const getSugest = (id) => {
      fetch(`https://api.rawg.io/api/games/${id}/suggested`)
        .then((response) => response.json())
        .then((response) => {
          pageContent.querySelector(".page-list .articles").innerHTML = fillCardGame(response.results.slice(0, 6));
        })


    };

    const fillDetails= game => {
      let platforms = "";
      let stores = "";
      game.platforms.forEach(platform => {
        platforms += `${platform.platform.name}, `;
      });
      platforms = platforms.substr(0, platforms.length - 2);
      game.stores.forEach(store => {
        stores += `<a href="${store.url}">${store.store.name}</a><br><br>`
      })
      const genres = arrayInLink(game.genres);
      const tags = arrayInLink(game.tags);
      getScreenShots(game.id, game.slug);
      getSugest(game.id);
      getYoutube(game.id);
      const htmlString = `
                          <div class="details-jumbotron">
                            <img src="${game.background_image}" alt="${game.slug}">
                            <a href="${game.website}">Check Website ></a>
                          </div>
                          <section class="details">
                            <div class="title">
                              <h1>${game.name}</h1>
                              <p>${game.rating}/5 - ${game.ratings_count} votes</p>
                            </div>
                            <div class="plot">
                              <h3>Plot</h3>
                              <p>${game.description}</p>
                            </div>
                            <div class="about">
                              <div>
                                <h3>Release Date</h3>
                                <p>${game.released}</p>
                              </div>
                              <div>
                                <h3>Developer</h3>
                                <p>${game.developers[0].name}</p>
                              </div>
                              <div class="half">
                                <div>
                                  <h3>Platforms</h3>
                                  <p class="platforms">${platforms}</p>
                                </div>
                                <div>
                                  <h3>Publisher</h3>
                                  <p>${game.publishers[0].name}</p>
                                </div>
                              </div>
                            </div>
                            <div class="types">
                              <div>
                                <h3>Genre</h3>
                                <p>${genres}</p>
                              </div>
                              <div class="tags">
                                <h3>Tags</h3>
                                <p>${tags}</p>
                              </div>
                            </div>
                            <div class="stores">
                              <h2>buy</h2>
                              ${stores}
                            </div>
                            <div class="video">
                              <h2>trailer</h2>
                              <video width="100%" controls>
                                <source src="${game.clip.clip}" type="video/mp4">
                              </video>
                            </div>
                            <h2>screenshots</h2>
                            <div class="screenshots">
                              <div class="loader">
                                <span class="loader-icon"></span>
                                Chargement...
                              </div>
                            </div>
                            <h2>youtube</h2>
                            <section class="youtube" style="justify-content: center;">
                              <div class="loader">
                                <span class="loader-icon"></span>
                                Chargement...
                              </div>
                            </section>
                            <h2>similar games</h2>
                            <section class="page-list" style="justify-content: center;">
                              <div class="articles">
                                <div class="loader">
                                  <span class="loader-icon"></span>
                                  Chargement...
                                </div>
                              </div>
                            </section>
                          </section>
      `;
      return htmlString;
    }

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;
      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          pageContent.querySelector('section.page-list').innerHTML = fillDetails(response);
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
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
export {PageDetail};



