import { useState,useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Cards from './Components/Cards'
import Alert from './Components/Alert'
import Accordian from './Components/Accordian'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
const [mode, setMode] = useState("white")
const [alert, setAlert] = useState(null)
  
const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}
const toggleBackgroundColor = (color) => {
  if (mode === color) {
    setMode('white')
    document.body.style.backgroundColor = 'white'
  } else {
    setMode(color)
    document.body.style.backgroundColor = color
    showAlert(`Background color changed to ${color}`, 'info')
  }
}

const [count, setCount] = useState(0);

const incrementCount = () => {
  setCount(count + 1)
}
const modaal=()=>{
  let timerInterval;
Swal.fire({
title: "Welcome To My App!",
html: "App will be ready in <b></b> milliseconds.",
timer: 1500,
timerProgressBar: true,
didOpen: () => {
  Swal.showLoading();
  const timer = Swal.getPopup().querySelector("b");
  timerInterval = setInterval(() => {
    timer.textContent = `${Swal.getTimerLeft()}`;
  }, 100);
},
willClose: () => {
  clearInterval(timerInterval);
}
}).then((result) => {
if (result.dismiss === Swal.DismissReason.timer) {
}
});
}
useEffect(()=>{
  modaal()
},[])

return (
  <>
  <Router>
    <Header  bgRed={() => toggleBackgroundColor('red')} 
        bgGreen={() => toggleBackgroundColor('green')} 
        bgBlue={() => toggleBackgroundColor('blue')} 
        bgYellow={() => toggleBackgroundColor('yellow')}/>
        <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={<Accordian/>}>
          </Route>
          <Route exact path="/card" element={<Cards/>}>
          </Route>
          <Route exact path="/" element={<div className="container my-5">
        <div className="container" style={{borderRadius: '10px', border: '5px solid', padding: '20px' ,textAlign: 'center', cursor: 'pointer'}}>
      <h1>counter no: {count}</h1>
      </div>
      <center>
      <button style={{borderRadius: '10px', border: '5px solid', padding: '10px' ,textAlign: 'center', cursor: 'pointer'}} className="mx-3 my-5" onClick={() => setCount(count - 1)}><i className="fa-solid fa-minus"></i></button>
      <button style={{borderRadius: '10px', border: '5px solid', padding: '10px' ,textAlign: 'center', cursor: 'pointer'}} className="mx-3 my-5" onClick={incrementCount}><i className="fa-solid fa-plus"></i></button>
      </center>
      </div>}>
          </Route>
        </Routes>
      
      </Router>
    </>
  )
}

export default App
