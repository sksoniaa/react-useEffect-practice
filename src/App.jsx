import { useState, useEffect } from "react"

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `${count} new mwssages!`
    console.log('run useEffect ', count);

    return () => {
      console.log('clean up ', count);
    }
  }, [count])


  return (
    <>
      <div>
        <h3>{count} new Messages!</h3>
        <button onClick={() => setCount(count+1)}>Increate</button>
        <button onClick={() => setCount(count-1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>


      </div>
    </>
  )
}

export default App
