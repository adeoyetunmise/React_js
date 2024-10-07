import './App.css';
// import Button from './Button';
// import Info from './Info';
// import rec from './image2.jpg';
import Card from './Card';
import persons from './persons.json'
import './Card.css'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState(true)

  const dark = {
    backgroundColor: 'black',
    color: 'white',
  }

  const light = {
    backgroundColor: 'white',
    color: 'black',
  }

  const add = () =>{
    setCount(count+1)
  }
   const reduce = () =>{
    setCount(count-1)
   }
  

  // const user = "Mr Phil"
  return (
    <div className="App" 
    style={theme ? light : dark}>

      <button onClick={() => {setTheme(!theme)}}>{theme ? '☀️' : '🌘'}</button>

      <div className='text-center'>
        <h3>{count}</h3>
        <button onClick={add}>+</button>
        <button onClick={reduce}>-</button>

      </div>

      {/* <h1>Welcome to our first React class</h1>
      <p>Lorem ipsum dolor, sit amet consectetur 
        adipisicing elit. Blanditiis sint corporis illum, 
        voluptatem quasi eum sunt veritatis officia pariatur 
        doloremque aliquam numquam nulla exercitationem error necessitatibus 
        iure voluptates minus quo!</p>

        <img src='/image.jpg'  alt=''/>
        <img src={rec}  alt=''/>
        <img src= {require("./image2.jpg")}  alt=''/> */}
        

        {/* <Info user="Tenacious"/>
        <Info user="Mr Phil"/>
        <Button click = "Click Me"/><br/>
        <Button click = "Submit"/><br/>
        <Button click = "Delete"/> */}
       



       {/* card */}      
       <div className='person'>
        
        {persons.map((person) =>(<Card {...person}/>))}

       </div>
    </div>
  );
}

export default App;
