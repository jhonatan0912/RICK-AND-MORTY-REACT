import React, { useState, useEffect } from 'react'
import Card from "./Card";
import NavPage from "./NavPage";


function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false)
      setCharacters(data.results);
    }
    getCharacters();
  }, [page])

  return (
    <>
      <h1 className='text-5xl font-bold text-center underline'>Characters</h1>
      <NavPage page={page} setPage={setPage} />
      <div className='grid md:grid-cols-4 w-10/12 m-auto mt-10 gap-4'>
        {
          loading ? (
            <h2>Loading...</h2>
          ) : (
            characters.map(character => (
              <Card character={character} key={character.id} />
            ))
          )
        }
      </div>
    </>
  )
}

export default CharactersList