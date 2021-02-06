import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoriesPage from './Pages/CategoriesPage';
import HomePage from './Pages/HomePage';

const App = () => {
    return (
        <Router>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/categories">
                <CategoriesPage />
            </Route>
        </Router>
    )
}

export default App;
