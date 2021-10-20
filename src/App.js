import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import UploadPosts from './components/UploadPosts'
import Posts from './containers/Posts'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/posts" component={Posts}></Route>
          <Route exact path="/upload" component={UploadPosts}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
 