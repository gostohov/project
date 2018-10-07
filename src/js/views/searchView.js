import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => { elements.searchInput.value = ''; }
export const clearResults = () => { elements.searchResultList.innerHTML = ''; }

const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(' ')}...`;
  }
  return title;
}

const renderRecipe = recipe => {
  const markup = `
    <a href="#${recipe.recipe_id}" class="list-group-item list-group-item-action mb-3 border-0 rounded-0">
      <div class="row">
        <div class="col-auto align-self-center">
          <img class="image-cropper" src="${recipe.image_url}">
        </div>
        <div class="col">
          <h4>${limitRecipeTitle(recipe.title)}</h4>
          <p class="m-0">${recipe.publisher}</p>
        </div>
      </div>
    </a>
  `;
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
}

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
}