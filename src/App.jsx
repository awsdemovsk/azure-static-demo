import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        fontFamily: 'Arial',
        textAlign: 'center',
        marginTop: '100px',
      }}
    >
      <h1>Azure Static Web App Demo</h1>

      <p>
        React + Vite app deployed in Azure Static Web Apps
      </p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        Count: {count}
      </button>
    </div>
  )
}

export default App
