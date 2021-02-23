import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router basename="/react">
                <div className="App">
                    <Link to="/">react home</Link>
                    <Link to="/profile">react profile</Link>
                </div>
                <Route
                    exact={true}
                    path="/"
                    render={() => (
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    )}
                />
                <Route
                    path="/profile"
                    render={() => <div>react profile页面</div>}
                />
            </Router>
        </div>
    );
}

export default App;
