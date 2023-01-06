import BookNames from './components/bookNames';
import Analytics from './components/analytics';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './App.css';


function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                    <Link to="/">List of Books</Link>
                    </li>
                    <li>
                    <Link to="/analytics">Analytics</Link>
                    </li>
                </ul>
                <hr />
            <Routes>
                <Route  path="/" element={<BookNames/>}/>
                <Route path="/analytics" element={<Analytics/>}/>
            </Routes>
            </div>
        </Router>
    )
}

export default App;