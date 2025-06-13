'use client';
import React, { useEffect, useState } from 'react'
// import Image from 'next/image';

export default function Page() {
    const [profile, setProfile] = useState(null);
    useEffect(()=>{
        fetch('/data/users.json')
        .then(res => res.json())
        .then(data => setProfile(data))
    },[])
      if (!profile) return <div>Loading...</div>;
  return (
    <div className='text-center'>
        <h1 className='font-bold'>CSR</h1>
        <h1 className=''>Profile Page</h1>
        <div className='pt-10 text-left'>
        {
            profile && (
                profile.map((user) => (
                    <div key={user.id} className='py-2'>
                    <h1>Name :  {user.name}</h1>
                    <h2>Username : {user.username}</h2>
                    <h3>State : {user.state}</h3>
                    {/* <Image src={user.avatar_url} alt={user.name} width={100} height={100} />       */}
                </div>       
                ))
            )
        }
        </div>
    </div>
  )
}
