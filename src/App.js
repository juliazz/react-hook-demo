import React from 'react';
import logo from './logo.svg';
import ClockClass from './clockClass'
import ClockHook from './clock'
import Ref from './ref'
import ContentPar from './contentPar'
import Todolist from './todolist'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p id="link"> 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ClockClass></ClockClass>
        <ClockHook></ClockHook>
        <ContentPar></ContentPar>
        <Ref></Ref>
        <Todolist></Todolist>
      </header>
    </div>
  );
  
}

export default App;
