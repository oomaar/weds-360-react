import React from 'react';
import styled from "styled-components";
import { Footer, Jumbo, Navbar } from './Components';

const Application = styled.div``;

const App = () => {
    return (
        <Application>
            <Navbar />
            <Jumbo />
            <Footer />
        </Application>
    )
}

export default App;
