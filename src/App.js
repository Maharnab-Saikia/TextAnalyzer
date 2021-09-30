import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // weather dark mode is enable
  const [alertf, setAlertf] = useState('')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setAlertf('show')

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333333';
      showAlert('Dark mode enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextAnalyzer" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} alertf={alertf} mode={mode} />
        <div className="container my-3">
          <Switch>

            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <TextForm heading="Text Analyzer:" mode={mode} showAlert={showAlert} />
            </Route>

          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
