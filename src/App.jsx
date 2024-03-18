import { useState, useEffect } from "react"

function App() {

  const [time, setTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1)
    }, 1000)


    return () => {
      clearInterval(timer) // This ensures that the interval is stopped when the component is unmounted or when the time variable changes.
    }
  }, [time])


  return (
    <>
      <div>
        <h3>{time} in seconds!</h3>

      </div>
    </>
  )
}

export default App
