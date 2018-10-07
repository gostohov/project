import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    async getResults() {
        //Zurab 
        const key = '729e62456695e9d144e5d4d51058c9ef';

        //Semen
        //const key = 'e301dc3c52049c0529f07ff6e51c14db';

        //Artme
        //const key = '1cc05fb58fb3bbc26178ead462fc920e';

        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch(error) {
            alert(error);
        }
    }
}