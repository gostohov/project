export const elements = {
  searchInput: document.querySelector('.search_field'),
  searchForm: document.querySelector('.search'),
  searchResultList: document.querySelector('.list-group'),
  searchRes: document.querySelector('.results'),
  recipe: document.querySelector('.recipe'),
  recipeLoader: document.querySelector('.width-loader')
};

export const elementStrings = {
  loader: 'loader',
};

export const renderLoader = parent => {
  const loader = `
    <div class="${elementStrings.loader} text-center bg-warning">
      <span class="glyphicon glyphicon-refresh gly-spin" aria-hidden="true"></span>
    </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};