'use client';
import { useParams } from 'next/navigation';
import React from 'react'

export default function page() {
    const params = useParams();
  return (
    <div>
      404
        More details about product {params.id} with {params.params}
    </div>
  )
}
