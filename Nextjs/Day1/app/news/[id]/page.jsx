'use client';
import Comments from "@/app/components/Comments/Comments";
import Popup from "@/app/components/Popup/Popup";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
    const handleClose = () => {
        setShowModal(false);
    }
    const handleOpen = () => {
        setShowModal(true);
    }
  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;
  const id = params.id;
  const article = data.articles[id];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button className="-ml-5 mb-10"><a href="/">Back</a></button>
      <h1 className="text-4xl font-bold mb-2 leading-tight">
        {article.title}
      </h1>
      <div className="text-gray-500 mb-2 text-sm">2 hours ago</div>
      <div className="text-lg mb-4 font-medium">
        {article.author ? article.author : "Unknown Author"}
        {article.source?.name && `, ${article.source.name}`}
      </div>
      {article.urlToImage && (
        <div className="flex gap-4 mb-6 justify-center">
          <Image
            src={article.urlToImage}
            alt={article.title}
            width={360}
            height={180}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      )}
      {article.content.slice(0, 100)}
      {article.content && article.content.length > 200 && (
        <div>
          <button
            className="mt-2 text-blue-600 hover:cursor-pointer"
            onClick={handleOpen}
          >
            See more
          </button>
          {showModal && (
            <Popup data={article.content} handleClose={handleClose} />
          )}
        </div>
      )}
      <div className="flex gap-4 mt-6">
        <button className="text-gray-600 hover:text-gray-900">Share</button>
        <button className="text-gray-600 hover:text-gray-900">Save</button>
      </div>
      <div className="mt-10">
        <Comments />
      </div>
    </div>
  );
}