import React, {useState} from 'react';
import answers from './EightBall';
import './App.css'



function App() {
  const getAnswer = () => {
    const randIdx = Math.floor(Math.random() * answers.length);
    const {msg, color} = answers[randIdx]
    console.log(msg, color)
    setColor(color)
    setMessage(msg)
  }

  const [color, setColor] = useState('black')
  const [message, setMessage] = useState('Think of a question')

  return (
    <>
      <div className="EightBall">
        <div className="EighBall-itself" onClick={getAnswer} style={{backgroundColor: color}} ><p className="message">{message}</p></div>
      </div>
    </>
  );
}

export default App;
