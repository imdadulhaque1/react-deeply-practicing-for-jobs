import React, {useState} from 'react'

export default function UseState() {
          const [count, setCount] = useState(0);
          const handleIncrement = () =>{
                    setCount(count + 1);
          }
          return (
                    <div>
                    <hr/>
                    <h3>Increment Using useState() in Functional Component!</h3>
                    <hr/>
                              <h1>Count: {count}</h1>
                              <button onClick={handleIncrement} >Increment</button>
                    </div>
          )
}
