import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import {NotFound} from '../pages/NotFound'

const MyRoutes = () => {
  return (
    <Routes>
		<Route exact path='/' Component={Home}/>
		<Route exact path='/About' Component={About}/>
		<Route path='*' Component={NotFound}/>
	</Routes>
  );
}

export {MyRoutes};