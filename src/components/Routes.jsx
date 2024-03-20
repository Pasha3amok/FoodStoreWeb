import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import {NotFound} from '../pages/NotFound'
import {Category} from '../pages/Category'

const MyRoutes = () => {
  return (
    <Routes>
		<Route exact path='/' Component={Home}/>
		<Route exact path='/About' Component={About}/>
		<Route exact path='/Category/:name' Component={Category}/>
		<Route path='*' Component={NotFound}/>
	</Routes>
  );
}

export {MyRoutes};