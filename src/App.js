import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const darkMode = () => {
    setMode('dark')
    document.body.style.backgroundColor = '#131517'
    showAlert('success', 'Dark mode has been enabled')
  }

  const lightMode = () => {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert('success', 'Light mode has been enabled')
  }

  const blueMode = () => {
    setMode('blue')
    document.body.style.backgroundColor = '#083AA9'
    showAlert('success', 'Blue mode has been enabled')
  }

  const redMode = () => {
    setMode('red')
    document.body.style.backgroundColor = '#C21010'
    showAlert('success', 'Red mode has been enabled')
  }

  return (
    <>
      <Router>



        <Navbar title="TextUtils" mode={mode}
          darkMode={darkMode}
          lightMode={lightMode}
          redMode={redMode}
          blueMode={blueMode} />

        <Alert alert={alert} />
        <div className="container">


          <Routes>

            <Route path='/'
              element={<TextForm heading="Enter the text to analyze below"
                mode={mode}
                darkMode={darkMode}
                lightMode={lightMode}
                redMode={redMode}
                blueMode={blueMode}
                showAlert={showAlert} />} />

            <Route path='/about'
              element={<About />} />
          </Routes>



        </div>
      </Router>


      {/* <Alert alert={alert} showAlert={showAlert} /> */}


    </>
  );
}

export default App;
