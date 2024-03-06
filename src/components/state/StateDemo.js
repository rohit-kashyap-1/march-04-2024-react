

import earth from './../images/earth1.jpg'
import { useState } from 'react';

function StateDemo() {
  //state
  let [count,setCount] = useState(1)
  let [visible,setVisible] =  useState(true)

  console.log(count)

  function increaseCounter(){
    count++
    setCount(count)
    
  }

  function decreaseCounter(){
    count--
    setCount(count)
  }
  function showImage(){
    setVisible(true)
  }
  function hideImage(){
    setVisible(false)
  }
  return (
    <div className="">
             <h1>{count}</h1>
             <button onClick={increaseCounter}>Increase</button>
             <button onClick={decreaseCounter}>Decrement</button>
             <hr />
             
             {(visible==true)?<img src={earth} width={350} />:<h3>Image has been hidden</h3>}

             <button onClick={showImage}>Show</button>
             <button onClick={hideImage}>Hide</button>
    </div>
  );
}

export default StateDemo;
