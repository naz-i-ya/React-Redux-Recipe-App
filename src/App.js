import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import * as types from './redux/actionType';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DirectionsRun } from '@mui/icons-material';

function App() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [spacing, setSpacing] = useState(2);
  const [expanded, ExpandMore] = useState(false);


  const { recipes } = useSelector((state) => state.data);

  const handleExpandClick = () => {

  }
   
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

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
      {recipes && recipes.hits  && recipes.hits.map((item, id) => (
        <>
         <h4 key={id}>{item.recipe.label}</h4>
        <img src={item.recipe.image} />
        <p>{item.recipe.ingredientLines}</p>
        </>
       
      ))}
      </form>
      
       {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>

        {
          recipes && recipes.hits  && recipes.hits.map((item, index) => (
            <Grid key={index} item>
              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.recipe.label}
        subheader={
          <span>
            <DirectionsRun/>
            {item.recipe.calories}
          </span>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={item.recipe.image}
        alt={item.recipe.label}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph></Typography>
          <Typography paragraph>
         
          </Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography paragraph>
          
          </Typography>
          <Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
            </Grid>

          ))}  
        </Grid>
      </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
