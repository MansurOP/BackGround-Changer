import { useState } from "react"
function App() {
  const [color, setColor] = useState("Olive")

  return (
    <div className="w-full h-screen "
    style={{backgroundColor : color  } }>
      <div className="fixed flex felx-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={()=>setColor("red")} 
        className="outline-none px-4 py-1 rounded-full bg-red-700">
          Red
        </button>
        <button
        onClick={()=>setColor("Green")} 
        className="outline-none px-4 py-1 rounded-full bg-green-400">
          Green
        </button>
        <button
        onClick={()=>setColor("Blue")} 
        className="outline-none px-4 py-1 rounded-full bg-blue-600">
          Blue
        </button>
        <button
        onClick={()=>setColor("Yellow")} 
        className="outline-none px-4 py-1 rounded-full bg-yellow-500">
          Yellow
        </button>
        <button
        onClick={()=>setColor("White")} 
        className="outline-none px-4 py-1 rounded-full bg-white">
          White
        </button>
        <button
        onClick={()=>setColor("Black")} 
        className="outline-none px-4 py-1 rounded-full bg-black "
        style={{color:"white"}}>
          Black
        </button>
        <button
        onClick={()=>setColor("Pink")} 
        className="outline-none px-4 py-1 rounded-full bg-pink-400">
          Pink
        </button> 
        <button
        onClick={()=>setColor("Purple")}
        className="outline-none px-4 py-1 rounded-full bg-purple-500">
          Purple
        </button>
      </div>

      </div>
      
    </div>
  )
}

export default App


