import { elements } from './base';

export const clearRecipe = () => {
  elements.recipe.innerHTML = '';
}

export const renderRecipe = recipe => {
  const markup = `
    <div class="bg-light">
      <img class="img-fluid p-3 mx-auto d-block" src="${recipe.img}" alt="${recipe.title}">
    </div>
  `;

  elements.recipe.insertAdjacentHTML('afterbegin', markup);
};