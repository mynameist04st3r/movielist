// import { useState } from 'react'
import './App.css'

function App() {
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  return (
    <>
      <div>
        <h1>Movies</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.title}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
