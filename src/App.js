
import Header from './common/Header';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import HomeComponent from './pages/home/HomeComponent';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
