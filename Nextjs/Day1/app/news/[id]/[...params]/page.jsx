'use client';
import { useParams } from 'next/navigation';
import React from 'react'

export default function page() {
    const params = useParams();
  return (
    <div>
        More details about product {params.id} with {params.params}
    </div>
  )
}
