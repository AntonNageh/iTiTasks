'use client';
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch('/data/data.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  if(!data) return <div>Loading...</div>;
  return (
    <div className="flex justify-center gap-10 flex-wrap">
      {
        data &&
          <Card data={data.articles}/>
      }
    </div>
  );
}
