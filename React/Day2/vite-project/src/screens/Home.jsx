import { Button } from "@mui/material";
import MediaCard from "../components/Mediacard";

export default function Home({data, setIsForm}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column',flexWrap: 'wrap', gap: '50px', color: 'black', minWidth: '400px', justifyContent: 'center'}}>
    <div style={{display: 'flex', flexDirection: 'row',flexWrap: 'wrap', gap: '50px', color: 'black', padding: '5dvw', minWidth: '400px'}}>
      <MediaCard data={data} setIsForm={setIsForm}/>
    </div>
      <Button color="primary" variant="contained" style={{width: '100px', margin: 'auto'}} onClick={() => setIsForm(false)} size="small">Add more</Button>
    </div>
    
  )
}
