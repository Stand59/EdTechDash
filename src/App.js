import BookNames from './components/bookNames';
import Analytics from './components/analytics';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'adminBoot/css/sb-admin-2.min.css';
import Content from './components/content';
import { useState} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
//   import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
//   } from "react-router-dom";
import './App.css';


function App() {
    const [shortName1, setshortName] = useState(2);
    return (
        <Content/>
    )
}

export default App;