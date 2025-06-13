import React from 'react'

export default function Popup({ handleClose, data }) {
    const cleanedData = data?.replace(/\s*\[\+\d+\schars\]$/, '') ?? '';
    return (
        <>
            <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white rounded-lg text-black shadow-lg max-w-2xl max-h-fit w-full">
                    <div className="p-6 pt-0 text-center">
                        <svg className="w-20 h-20 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" opacity="0.1"/>
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                            <rect x="7" y="9" width="6" height="2" rx="1" fill="currentColor"/>
                            <rect x="7" y="13" width="10" height="2" rx="1" fill="currentColor" opacity="0.6"/>
                            <circle cx="17" cy="10" r="1" fill="currentColor"/>
                        </svg>
                        <p className="mb-6 whitespace-pre-line text-left">{cleanedData}</p>
                        <button
                            onClick={handleClose}
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mt-4"
                        >
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
