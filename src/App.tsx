import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar/>
        {/* Content */}
        <Feed/>
        {/* Contacts */}
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
