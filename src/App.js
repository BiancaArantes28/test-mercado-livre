
import Header from './common/Header';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import store from './store';
import ProductsContainer from './pages/products/ProductsContainer';
import HomeContainer from './pages/home/HomeContainer';
import ProductsDetailContainer from './pages/products/ProductsDetailContainer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/products" component={ProductsContainer} />
          <Route path="/product-detail/:id" component={ProductsDetailContainer} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
