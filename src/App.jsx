import { useState, useEffect } from "react"

function App() {

  const [count, setCount] = useState(0)


  // useEffect is used to perform side effect in our component
  // -- Fetching data from API
  // -- Updating the DOM - document & window
  // -- Timer functions - setInterval / clearInterval
  


  useEffect(() => {

    console.log('useEffect ', count);

    return () => {
      console.log('clean up ', count);
    }


  }, [count])

  console.log('function rendered');

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <h3>{count} - Count</h3>

      </div>
    </>
  )
}

export default App
