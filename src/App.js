import MainComponent from './components/MainComponent'
import './App.css';
import { BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>

    </div>
  );
}

export default App;
