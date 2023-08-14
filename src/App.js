
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
function App() {
  return(
    <>
    <Router>
        <Header/>
        <Switch>
          
        </Switch>
      
    </Router>
    </>

  )
}

export default App;
