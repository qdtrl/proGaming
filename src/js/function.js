const arrayInString = array => {
  let longString = ""
  array.forEach(string => {
    longString += `${string.name}, `
  });
  return longString.substr(0, longString.length - 2);
}

const arrayInLink = array => {
  let longString = ""
  array.forEach(string => {
    longString += `<a href="#search/${string.slug}">${string.name}, </a>`
  });
  return longString + '...';
}

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

const dateInString = released => {
  let date = new Date(released).toString().split(" ");
  return date[1] + ' ' + date[2] + ',' + date[3];
}

const fillCardGame = games => {
  let articles = "";
  games.forEach((game, index) => {
    if (index < 9) {
      articles += `
        <a class="card" href="#detail/${game.id}">`;
    } else {
      articles += `
        <a class="card hide" href="#detail/${game.id}">`;
    }
    articles += `
          <div class="cardGame">
            <div class="infos">
              <p>${dateInString(game.released)}</p>
              <p>${arrayInString(game.genres)}</p>
              <p>${game.rating}/5 - ${game.ratings_count} votes</p>
              <p class="tags">${arrayInString(game.tags)}</p>
            </div>
            <img class="game" src="${game.background_image}" alt="${game.slug}">

            <h1>${game.name}</h1>
            <div class="platform">
              ${imagePlatforms(game.parent_platforms)}
            </div>
          </div>
        </a>
        `;
  });
  return articles;
}

const showMore = (e) => {
  e.preventDefault();
  const links = document.querySelectorAll('.card.hide');
  console.log(links);

  links.forEach((link, value) => {
    if (value >= 9) {
      return;
    }
    link.classList.remove('hide');
  })
  if (links.length === 9) {
    document.querySelector('.show').innerHTML= "";
  }
};


export {arrayInString, showMore, arrayInLink, imagePlatforms, dateInString, fillCardGame};