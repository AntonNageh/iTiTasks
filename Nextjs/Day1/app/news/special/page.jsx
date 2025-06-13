
import React from 'react';

export default async function SpecialNewsPage() {
  const response = await fetch(process.env.NEXT_PUBLIC_URL , {cache: 'no-store' });
  const newsData = await response.json();
  return (
    <div>
      <h1>Special News (SSR)</h1>
      <div className='mt-5'>
        {newsData.articles.map((article) => (
          <div key={article.id} className='py-5'>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}