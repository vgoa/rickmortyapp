import HomeContainer from "./containers/HomeContainer/HomeContainer.js"
import Character from "./pages/Character/Character.js"
import {Switch,BrowserRouter,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" component={HomeContainer}/>
          <Route path ="/Character/:id" component={Character} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
