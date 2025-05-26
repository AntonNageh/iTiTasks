export default function Slider({currentIndex, images}) {
  const ImageUrl = Object.keys(images).map((key, index) => {
    return images[key][currentIndex]["poster_path"];
  });  
  return (
    <div>
      {ImageUrl.map((url, index) => {
        return <img style={{width:"300px", height:"300px"}} src={`https://image.tmdb.org/t/p/w500${url}`} alt={`Image ${index}`} />;
      })}
    </div>
  )
}