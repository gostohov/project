import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => { elements.searchInput.value = ''; }
export const clearResults = () => { elements.searchResultList.innerHTML = ''; }

const renderRecipe = recipe => {
  const markup = `
    <li class="list-group-item list-group-item-action mb-3">
      <a href="#${recipe.recipe_id}">
        <figure class="figure">
          <img src="${recipe.image_url}" class="figure-img img-fluid rounded">
          <figcaption class="figure-caption text-right">
            <h6>${recipe.title}</h4>
            <p>${recipe.publisher}</p>
          </figcaption>
        </figure>
      </a>
    </li>
  `;
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
}

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
}