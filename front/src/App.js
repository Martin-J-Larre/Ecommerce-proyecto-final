import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import SuccessPage from './pages/SuccessPage';

function App() {
    const user = true;
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/products/:category'>
                    <ProductList />
                </Route>
                <Route path='/product/:id'>
                    <ProductPage />
                </Route>
                <Route path='/cart'>
                    <CartPage />
                </Route>
                <Route path='/success'>
                    <SuccessPage />
                </Route>
                <Route path='/login'>
                    { user ? <Redirect to="/"/> : <Login />}
                </Route>
                <Route path='/register'>
                { user ? <Redirect to="/"/> : <Register /> }
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
