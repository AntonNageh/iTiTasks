import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { addFavorite, removeFavorite } from "../features/movies/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

// Define the Movie type based on your Redux data shape
export interface Movie {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  button?: boolean;
}

interface MovieCardProps {
  movie: Movie;
  button?: boolean;
}

export default function MovieCard({ movie, button = false }: MovieCardProps) {
    const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.movies.favorites);
  const isFavorite = favorites.includes(movie.id);
  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie.id));
    }
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, paddingTop: 2 }}>
      <CardMedia
        component="img"
        height="194"
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={()=> handleFavorite()} color={isFavorite ? "error" : "default"}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography sx={{ color: 'text.primary', marginLeft: 2 }}>{movie.title}</Typography>
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
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography sx={{ marginBottom: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            {movie.overview}
            {
              !button &&
            <Button sx={{minWidth: '50%', marginTop: 2}} variant="contained" href={'/movies/' + movie.id}>More</Button>
            }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
