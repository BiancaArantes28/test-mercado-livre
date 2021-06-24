
import Header from './common/Header';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import HomeComponent from './pages/home/HomeComponent';
import ProductsContainer from './pages/products/ProductsContainer';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/products" component={ProductsContainer} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
