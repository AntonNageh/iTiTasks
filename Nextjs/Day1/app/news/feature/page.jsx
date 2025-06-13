import React from 'react'
export const revalidate = 10;
export default async function page() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL );
  const news = await res.json();
  console.log('Regenerating ISR page at', new Date().toLocaleString());
  return (
    <div>
      <h1>Featured News (ISR)</h1>
      {/* <p>Updated at {now}</p> */}
      <div className='mt-5'>
        {news.articles.map((article) => (
          <div key={article.id} className='py-5'>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
