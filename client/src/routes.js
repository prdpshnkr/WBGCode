import React from 'react';
import { Container } from 'react-bootstrap';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Header from './components/header';
import Home from './components/home';
import Posts from './components/posts';


const Routers = ()=>(
    <BrowserRouter>
        <Header/>
        <Container className="mt-5">
            <Routes>
                <Route path="/Posts" component={Posts}/>
                <Route path="/" component={Home}/>
            </Routes>
        </Container>
    </BrowserRouter>
)

export default Routers;
