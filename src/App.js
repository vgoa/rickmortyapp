import HomeContainer from "./containers/HomeContainer/HomeContainer.js"
import Character from "./pages/Character/Character.js"
import {Switch,HashRouter,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path ="/" component={HomeContainer}/>
          <Route path ="/Character/:id" component={Character} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
