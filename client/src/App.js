import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/random_artist").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        // console.log(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof data.random_artist ==='undefined') ? (
        <p>Loading...</p>
      ) : ( data.random_artist
        // data.random_artist.map((random_artist, i) => (
        //   <p key = {i}>{random_artist}</p>
        // ))
    )}
    
    </div>
  )
}

export default App