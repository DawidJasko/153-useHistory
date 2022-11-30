import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'

import Content from './Content'
import Header from './Header'

import "./style.css";

export default function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Content/>
      </Router>
    </div>
  );
}
