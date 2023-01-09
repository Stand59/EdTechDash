import BookNames from './bookNames';
import Analytics from './analytics';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
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

        return (
            <BrowserRouter>
            <div>
                {/* <ul>
                    <li>
                    <Link to="/">List of Books</Link>
                    </li>
                    <li>
                    <Link to="/analytics">Analytics</Link>
                    </li>
                </ul>
                <hr /> */}
            <Routes>
                <Route  path="/" element={<BookNames shortName45={shortName} setName={setName}/>}/>
                <Route path="/analytics" element={<Analytics shortName45={shortName} setName={setName}/>}/>
            </Routes>
            </div>
        </BrowserRouter>
        );
      }

