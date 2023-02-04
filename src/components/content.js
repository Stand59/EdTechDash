import BookNames from './bookNames';
import Analytics from './analytics';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import React, {Component} from 'react';
  import  { useState } from "react";

  export default function Content() {
// class Content extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //       shortName: "empty",
//     //     };
//     //   }
    const [shortName, setName] = useState('hello');
    const [shortName2, setName2] = useState('hello');
        return (
            <BrowserRouter>
            <div>
            <Routes>
                <Route  path="/" element={<BookNames shortName45={shortName} setName={setName}/>}/>
                <Route path="/analytics" element={<Analytics shortName45={shortName} shortName22={shortName2} setName2={setName2}/>}/>
            </Routes>
            </div>
        </BrowserRouter>
        );
      }

