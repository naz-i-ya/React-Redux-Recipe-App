import axios from "axios";

const YOUR_APP_ID = "8bbf1d1c";
const YOUR_APP_KEY = "aa0ef0cf04cbcefa39546f89221be1ba";


export const getRecipes =  async(query) => {
    
   const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

   return await axios.get(url);
};