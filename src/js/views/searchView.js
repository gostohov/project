import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => { elements.searchInput.value = ''; }
export const clearResults = () => { elements.searchResultList.innerHTML = ''; }

const renderRecipe = recipe => {
  const markup = `
    <li class="list-group-item list-group-item-action mb-3 border-0 rounded-0">
      <div class="row">
        <div class="col-auto align-self-center">
          <img class="image-cropper" src="${recipe.image_url}">
        </div>
        <div class="col">
          <h4>${recipe.title}</h4>
          <p class="m-0">${recipe.publisher}</p>
        </div>
      </div>
    </li>
  `;
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
}

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
}