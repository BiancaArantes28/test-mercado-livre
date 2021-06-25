
import Header from './common/Header';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import store from './store';
import HomeComponent from './pages/home/HomeComponent';
import ProductsContainer from './pages/products/ProductsContainer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/products" component={ProductsContainer} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
