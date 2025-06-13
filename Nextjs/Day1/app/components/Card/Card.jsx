import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Card({ data }) {
  const router = useRouter();

    return (
        data.map((item, index) => {
            const publishDate = item.publishedAt?.slice(0, 10);
            const publishTime = item.publishedAt?.slice(11, 16);

        const handleClick = () => {
            router.push('/news/' + index);
        };

            return (
                <div
                    className="max-w-sm w-full lg:flex py-10"
                    key={item.description || item.source?.name || index}
                >
                    <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        style={{ cursor: 'pointer', backgroundImage: `url(${item.urlToImage})` }}
                        title={item.title || "Card title"}
                        onClick={handleClick}
                    />
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Members only
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">{item.author || "John Doe"}</div>
                            <p className="text-gray-700 text-base">{item.content}</p>
                        </div>
                        <div className="flex items-center">
                            <Image width={100} height={100} className="w-10 h-10 rounded-full mr-4" src={item.urlToImage || '/default-avatar.png'} alt="Avatar" />
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{item.author || "John Doe"}</p>
                                <p className="text-gray-600">{publishDate}</p>
                                <p className="text-gray-600">{publishTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    );
}
