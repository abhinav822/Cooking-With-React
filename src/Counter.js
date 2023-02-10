import React,{useState,useContext} from 'react'  //useContext is mainly used to consume the context , context means the data that we want to share with other components
import { ThemeContext } from './App'


function Counter({initialCount}) {
    const [count,setCount] = useState(initialCount)
    const style = useContext(ThemeContext)  // style is an object with a backgroundColor property can we use other variable name instead of style ? and anser is yes we can use any variable name instead of style

  return (
    <div>
      <button style={style} onClick={() => setCount(count + 1)}>+</button>

      <span>{count}</span>

      <button style={style} onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}




export default Counter



