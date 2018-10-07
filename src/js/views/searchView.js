import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => { elements.searchInput.value = ''; }
export const clearResults = () => { elements.searchResultList.innerHTML = ''; }

const renderRecipe = recipe => {
  const markup = `
    <li class="list-group-item list-group-item-action mb-3 rounded-0">
      <img class="shadow"src="${recipe.image_url}" alt="Test">
      <h6>${recipe.title}</h4>
      <p>${recipe.publisher}</p>
    </li>
  `;
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
}

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
}