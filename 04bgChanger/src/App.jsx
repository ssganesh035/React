import { useState } from "react"
import ColorButton from './ColorButton';

function App() {
  const [color, setColor]= useState("olive");

  let colorArr= ["red", "green", "blue"];
  return (
    <div className="h-screen w-screen absolute inset-0" style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3 bg-white px-3 py-2 rounded-3xl text-black">
      {colorArr.map((element, index) => (        
      <ColorButton setColor={setColor} color={element} />
      ))}
    </div>
    </div>
  )
}

export default App;
