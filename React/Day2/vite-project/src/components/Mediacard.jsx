import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({data, setIsForm}) {

    const images = [
        "../src/assets/images/image1.jpg",
        "../src/assets/images/image2.jpg",
        "../src/assets/images/image3.jpg",
    ]
  return (
    <>
{data.map((user, index) => (
  <Card key={index} sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={images[Math.floor(Math.random() * images.length)]}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        <h3> Name : {user.username}</h3>
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <h4>Email : {user.email}</h4>
      </Typography>
    </CardContent>
    <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button size='small'>About me</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
))}
        
        </>
  );
}