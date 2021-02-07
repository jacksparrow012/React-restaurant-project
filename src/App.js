import MainComponent from './components/MainComponent'
import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import myStore from "./redux/Store"
function App() {
  console.log("From app.js", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
