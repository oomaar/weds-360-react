import React from 'react';
import { Categories, Footer, Jumbotron, Navbar } from '../Components';

const categoriesPage = () => {
    return (
        <div>
            <Navbar />
            <Categories />
            <Jumbotron />
            <Footer />
        </div>
    )
}

export default categoriesPage;
