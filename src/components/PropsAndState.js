import React, { useState } from "react"
//use state is a react method. it expects a variable and a function. 

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)
  //set count clicks sets the new value of count clicks. Use state is a react hook that allows us access to the variable. Use state does not allow you to just reset the value of count clicks. we have to update the value of countclicks with our setCountClicks function. This function makes the return run each time that it is updated. useState allows us to set a variable to hold a value and the second thing is a function to update that value. 

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    //whenever we change the state value we cause the return to run. 
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}
//onClick is the new event listener. we are no longer manupaliting the dom with innerHTML. based on whatever state and props are passed in we are updating DOM. 