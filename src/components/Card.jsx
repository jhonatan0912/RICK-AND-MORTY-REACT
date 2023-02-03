import React from 'react'

function Card({ character }) {
  return (
    <div className='border flex flex-col justify-center items-center'>
      <h2>{character.name}</h2>
      <img className="rounded-full" src={character.image} alt={character.name} />
      <p>{character.origin.name}</p>
    </div>
  )
}

export default Card