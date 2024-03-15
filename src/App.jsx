import React, { useEffect, useState } from 'react'

const App = () => {
  const [counter, setcounter] = useState(0)

  useEffect(() => {
    let interval;
    if (counter < 10)
      interval = setInterval(() => {
        console.log('counter:', counter);
        setcounter(counter + 1);
      }, 1000)
    
    return () => {
      console.log('cleanup=>', interval)
      clearInterval(interval)
    }
  }, [counter])
  return (
    <div style={{ textAlign: 'cener' }}>{counter}</div>
  )
}

export default App