import '../sass/main.scss';
import {routes} from './routes';
import {toggleMenu} from './menu';

// console.log(process.env.YOUR_VARIABLE)

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";
  
  var searchInput = document.getElementById('searchInput');
  console.log(searchInput);
  var searchButton = document.getElementById('searchButton');
  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());