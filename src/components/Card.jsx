import React from 'react';

function Card({ user, handleRemove, id }) {
  return (
    <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-4'>
      <div className='image w-12 h-12 rounded-full bg-zinc-200 overflow-hidden'>
        <img className='w-full h-full object-cover' src={user?.image || ''} alt='' />
      </div>
      <h1 className='mt-2 text-xl font-serif'>{user?.name}</h1>
      <h4 className='opacity-60 text-sm font-semibold'>{user?.email}</h4>
      <p className='mt-2 text-center text-xs font-semibold leading-5 tracking-tight'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime voluptatum quo!
      </p>
      <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4'>
        Remove It
      </button>
    </div>
  );
}

export default Card;
