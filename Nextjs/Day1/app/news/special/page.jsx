'use client';
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch('/data/data.json')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  const newsData = data;
  return (
    <div>
      <h1>Special News (SSR)</h1>
      <div className='mt-5'>
        {newsData && newsData.articles ? (
          newsData.articles.map((article) => (
            <div key={article.id} className='py-5'>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}