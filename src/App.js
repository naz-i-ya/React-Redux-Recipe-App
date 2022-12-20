import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import * as types from './redux/actionType';
import { useDispatch, useSelector } from 'react-redux';
import RecipeReviewCard from './Card'

function App() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  const { recipes } = useSelector((state) => state.data);

  const recipeList = () => {
    setQuery(search);
    setSearch('');
    console.log('clicked')
  }

  let dispatch = useDispatch();

 useEffect(() => {
      dispatch({type: types.FETCH_RECIPE_START, query} )
  },[query])

  return (
    <div className="App">  
      <h1>React Redux Recipe App</h1>
      <form noValidate autoComplete='off'>
      <TextField 
      id="outlined-basic"  
      variant="outlined"
      sx={{
        width: { sm: 400, md: 500 },
        "& .MuiInputBase-root": {
            height: 40
        }
    }}
    value={search}
    onChange={(e) => setSearch(e.target.value)} 
    />
    <Button 
    variant="contained"
    style={{
      padding: "8px 36px",
  }}
  onClick={recipeList}
    >Search</Button>
      {/* {recipes && recipes.hits  && recipes.hits.map((item, id) => (
        <>
         <h4 key={id}>{item.recipe.label}</h4>
        <img src={item.recipe.image} />
      <p>{item.recipe.ingredientLines}</p>       
        </>
       
      ))} */}
      </form>
      <RecipeReviewCard recipes={recipes}/>
    </div>
  );
}

export default App;
