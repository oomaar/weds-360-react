import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer, Jumbotron, Navbar, Photo } from './Components';
import CategoriesPage from './Pages/CategoriesPage';
import HomePage from './Pages/HomePage';

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/categories" component={CategoriesPage} />
            <Route exact path="/photo/:id" component={Photo} />
        </Router>
    )
}

export default App;
