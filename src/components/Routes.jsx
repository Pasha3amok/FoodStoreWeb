import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';
import { Category } from '../pages/Category';
import { Recipe } from '../pages/Recipe';

const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/About" Component={About} />
            <Route path="/Category/:name" Component={Category} />
            <Route path="/Meal/:idMeal" Component={Recipe} />
            <Route path="*" Component={NotFound} />
        </Routes>
    );
};

export { MyRoutes };
