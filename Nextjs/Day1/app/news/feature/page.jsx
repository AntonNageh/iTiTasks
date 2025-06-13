'use client';
import React, { useEffect, useState } from 'react'
export default function page() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch('/data/data.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  const news = data;
  return (
    <div>
      <h1>Featured News (ISR)</h1>
      {/* <p>Updated at {now}</p> */}
      <div className='mt-5'>
        {news && !news.articles && <p>Loading...</p>}
        {news?.articles.map((article) => (
          <div key={article.id} className='py-5'>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
