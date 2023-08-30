import "./App.css";
import Characters from "./components/Characters";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <Home /> */}
                <Characters/>
            </header>
        </div>
    );
}

export default App;