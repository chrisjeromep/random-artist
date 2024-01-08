import React, {useState, useEffect} from 'react'
import './App.css';


function App() {
  
  // useState to set the data
  const [data, setData] = useState([{}])
  // useState to set if data is loading or not
  const [isLoading, setIsLoading] = useState(false);
  // useState to set if an error occurred
  const [err, setErr] = useState('');

  // handleClick function to request a random artist when clicked
  const handleClick = async () => {
    // Set loading to true before starting the request
    setIsLoading(true);

    try {
      // Requesting the random artist
      const response = await fetch('random_artist', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      // If an error was encountered
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      // Setting the response as the result
      const result = await response.json();

      // Console logging for debugging
      console.log('result is: ', JSON.stringify(result, null, 4));

      // Setting the result as the data
      setData(result);
    } catch (err) { // If an error occcurs
      setErr(err.message);
    } finally { // Once evertything is done
      setIsLoading(false);
    };
  }


  return (
    <div class = "container">
      <div class = "interface">
      {/* Header */}
      <h1>Get Random Artist</h1>
      {/* Get Artist button */}
      <button onClick={handleClick}>Get Artist</button>
      {/* Display error message */}
      {err && <p class = "error">{err}</p>}
      {/* Display loading message */}
      {isLoading && !err && <p class = "loading">Loading...</p>} 
      {/* Display random artist */}
      {!isLoading && !err && <p class = "result">{data.random_artist}</p>}
    </div>
  </div>
  )
}

export default App