'use client';
import React, { useState } from 'react';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [value, setValue] = useState('');
    const [editingIdx, setEditingIdx] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [openMenuIdx, setOpenMenuIdx] = useState(null); // Track which menu is open

    // Function to handle deleting a comment by index
    const handleDelete = (idx) => {
        setComments(comments.filter((_, i) => i !== idx));
        setOpenMenuIdx(null);
    };

    return (
        <div>
            <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                            Discussion ({comments.length})
                        </h2>
                    </div>
                    <form className="mb-6">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-black dark:border-gray-700">
                            <label htmlFor="comment" className="sr-only">
                                Your comment
                            </label>
                            <textarea
                                id="comment"
                                rows={6}
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-black"
                                placeholder="Write a comment..."
                                required
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                setComments([
                                    ...comments,
                                    {
                                        text: value,
                                        author: "User",
                                        date: new Date().toLocaleString(),
                                    },
                                ]);
                                setValue('');
                            }}
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        >
                            Post comment
                        </button>
                    </form>

                    {comments.length === 0 && (
                        <div className="text-gray-500 dark:text-gray-400">No comments yet.</div>
                    )}
                    {comments.map((comment, idx) => (
                        <article key={idx} className="p-6 text-base bg-white rounded-lg dark:bg-gray-900 mb-3">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <img
                                        className="mr-2 w-6 h-6 rounded-full"
                                        src={comment.avatar || "https://flowbite.com/docs/images/people/profile-picture-2.jpg"}
                                        alt={comment.author}
                                    />
                                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                        {comment.author}
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        <time dateTime={comment.date} title={comment.date}>
                                            {comment.date}
                                        </time>
                                    </p>
                                </div>
                                {/* Options SVG and menu */}
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        aria-label="Options"
                                        onClick={() => setOpenMenuIdx(openMenuIdx === idx ? null : idx)}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <circle cx="4" cy="10" r="2" />
                                            <circle cx="10" cy="10" r="2" />
                                            <circle cx="16" cy="10" r="2" />
                                        </svg>
                                    </button>
                                    {openMenuIdx === idx && (
                                        <div className="absolute right-0 z-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md mt-2 min-w-[100px]">
                                            <button
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                onClick={() => handleDelete(idx)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                onClick={() => {
                                                    setEditingIdx(idx);
                                                    setEditValue(comment.text);
                                                    setOpenMenuIdx(null);
                                                }}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </footer>
                            {editingIdx === idx ? (
                                <div className="mb-2">
                                    <textarea
                                        className="w-full p-2 border rounded dark:bg-black dark:text-white"
                                        value={editValue}
                                        onChange={(e) => setEditValue(e.target.value)}
                                    />
                                    <div className="flex gap-2 mt-2">
                                        <button
                                            className="px-3 py-1 bg-blue-600 text-white rounded"
                                            onClick={() => {
                                                const updated = [...comments];
                                                updated[idx].text = editValue;
                                                setComments(updated);
                                                setEditingIdx(null);
                                            }}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="px-3 py-1 bg-gray-400 text-white rounded"
                                            onClick={() => setEditingIdx(null)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-500 dark:text-gray-400">{comment.text}</p>
                            )}
                            <div className="flex items-center mt-4 space-x-4">
                                <button
                                    type="button"
                                    className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                                >
                                    <svg className="mr-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 20 18">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                                        />
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}