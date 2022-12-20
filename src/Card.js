import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard( {recipes} ) {
    console.log('recipes::', recipes);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: '1.5rem'}}>
        <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {recipes && recipes.hits  && recipes.hits.map((item, id) => (
       <Grid item xs={2} sm={4} md={4} key={id}>
         <Card sx={{ maxWidth: 345 }} key={id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.recipe.label}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.recipe.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Recipe App Using Redux Saga With MUI5
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
          <Typography paragraph >Ingredient List:</Typography>
          <Typography paragraph>
          <b>{item.recipe.ingredientLines}</b>
          </Typography>
          <Typography paragraph>
          Cuisine Type:
          </Typography>
          <Typography paragraph>
           <b>{item.recipe.cuisineType}</b> 
          </Typography>
          <Typography paragraph>
          Diet Labels:
          </Typography>
          <Typography paragraph>
           <b>{item.recipe.dietLabels}</b> 
          </Typography>
          <Typography paragraph>
          Diet Labels:
          </Typography>
          <Typography paragraph>
           <b>{item.recipe.dietLabels}</b> 
          </Typography>
          <Typography paragraph>
          Dish Type:
          </Typography>
          <Typography paragraph>
           <b>{item.recipe.dishType}</b> 
          </Typography>
          <Typography paragraph>
          Health Labels:
          </Typography>
          <Typography paragraph>
           <b>{item.recipe.healthLabels}</b> 
          </Typography>
          <Typography paragraph>
          Meal Type:
          </Typography>
          <Typography paragraph>
           <b>{item.recipe.mealType}</b> 
          </Typography>
          <Typography paragraph>
          Total weight:
          </Typography>
          <Typography paragraph>
           <b>{item.recipe.totalWeight}</b> 
          </Typography>
          <Typography paragraph>
          Calories:
          </Typography>
          <Typography paragraph>
           <b>{item.recipe.calories}</b> 
          </Typography> 
        </CardContent>
      </Collapse>
    </Card>
        </Grid>        
      ))}
      </Grid>
    </Box>
   
  );
}