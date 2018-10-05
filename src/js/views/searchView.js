import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => { elements.searchInput.value = ''; }
export const clearResults = () => { elements.searchResultList.innerHTML = ''; }

const renderRecipe = recipe => {
  const markup = `
    <li class="list-group-item list-group-item-action mb-3">
      <a href="#${recipe.recipe_id}">
        <figure>
          <img src="${recipe.image_url}" alt="Test">
        </figure>
        <div>
          <h6>${recipe.title}</h4>
          <p>${recipe.publisher}</p>
        </div>
      </a>
    </li>
  `;
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
}

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
}