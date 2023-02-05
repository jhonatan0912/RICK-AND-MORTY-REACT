import React from 'react'

function NavPage({ page, setPage }) {
  console.log(page);
  return (
    <div className='flex justify-between items-center px-10'>
      <button
        className='bg-blue-600 active:scale-95 px-3 py-1 rounded text-white font-bold'
        onClick={() => setPage(page > 1 && page - 1)}
      >
        Previous
      </button>
      <p>Page: {page == false ? 1 : page}</p>
      <button
        className='bg-blue-600 active:scale-95 px-3 py-1 rounded text-white font-bold'
        onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  )
}

export default NavPage