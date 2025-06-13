export default async function page({ params }) {
  const { id } = params;
  const response = await fetch(process.env.NEXT_PUBLIC_UURL);
  const data = await response.json();
  console.log(data["code"])
  if (!data.articles || data.articles.length === 0) {
    return <div>No articles found.</div>;
  }

  const article = data.articles[id];

  return (
    <div>
      (SSG) News by id : {id}
      <div className='mt-5'>
        <h1>Title</h1>
        {article.title}
        <p>{article.description}</p>
        <p>{article.content}</p>
      </div>
    </div>
  );
}