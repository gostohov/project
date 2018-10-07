import axios from 'axios';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    //Zurab 
    const key = '729e62456695e9d144e5d4d51058c9ef';

    //Semen
    //const key = 'e301dc3c52049c0529f07ff6e51c14db';

    //Artme
    //const key = '1cc05fb58fb3bbc26178ead462fc920e';
    try {
      const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
    } catch(error) {
        alert(error);
    }
  }
}