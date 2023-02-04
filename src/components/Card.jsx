import React from 'react'

function Card({ character }) {
  return (
    <div className='border flex flex-col gap-3 justify-center items-centerp p-3'>
      <h2 className='text-3xl font-semibold'>{character.name}</h2>
      <img className="rounded-full w-10/12 m-auto" src={character.image} alt={character.name} />
      <p><b>Origin: </b>{character.origin.name}</p>
    </div>
  )
}

export default Card