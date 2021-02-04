import React from 'react';
import styled from "styled-components";
import { Footer, Home, Jumbo, Navbar } from './Components';

const Application = styled.div``;

const App = () => {
    return (
        <Application>
            <Navbar />
            <Home />
            <Jumbo />
            <Footer />
        </Application>
    )
}

export default App;
