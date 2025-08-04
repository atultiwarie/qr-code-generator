import { useState } from 'react'

import './App.css'
import QRCodeGenerator from "./assets/QRCodeGenerator";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <QRCodeGenerator />
      </div>
    </>
  );
}

export default App
