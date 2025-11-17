import React from 'react';
import logo from './logo.svg';
import './App.css';

import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <Calendar date={new Date()} />
    </div>
  );
}

export default App;
