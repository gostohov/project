import 'bootstrap';
import '../scss/main.scss';
import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoader, clearLoader } from './views/base';
require('webpack-icons-installer'); 

/**
 * Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    try {
      // 4) Search for recipes
      await state.search.getResults();

      // 5) Render results to UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (err) {
      alert('Somethins went wrong :(');
      clearLoader();
    }
    
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});


/**
 * Recipe controller
 */
const controlRecipe = async () => {
  // Get ID from URL
  const id = window.location.hash.replace('#', '');
  console.log(id);  
  if (id) {
    // Prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipeLoader);
    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data
      await state.recipe.getRecipe();

      // Render results to UI
      //clearLoader();
      recipeView.renderRecipe(state.recipe);
    } catch (err) {
      alert('Somethins went wrong :(');
      //clearLoader();
    }
  }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
