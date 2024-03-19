import Grid from '@mui/material/Grid';
import './App.css';
import Signup from "./components/signup";
import { Login } from "./components/login";
import Home from "./container/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import { CardList } from "./components/cardlist";
import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import store from "./redux";
import { Shop } from "./components/shop";
import ContactCard from "./components/contact";
const App = () => {
 
  // useEffect(() => {
  //   fetch('http://localhost:8000/category/findall')
  //     .then(res => res.json())
  //     .then(users => {
  //       setCategories(users);

  //     });
  // }, []);

  return (
<>
   <Provider store={store}>
  

      <Router>
      <Header />
        <Routes>
          <>
            {/* {categories && categories.map((category) => (
              <Route
                key={category.routeName}
                path={`/${category.routeName}`}
                element={<CardList category={category} />}
              />
            ))} */}
            <Route path='/' element={<Home />} />
            <Route path='/hats' element={<CardList  categoryId={0}/>}/>
            <Route path='/sneakers' element={<CardList  categoryId={1}/>}/>
            <Route path='/jackets'element={<CardList categoryId={2}/>}/>
            <Route path='/mens' element={<CardList  categoryId={4}/>}/>
            <Route path='/womens'element={<CardList categoryId={3}/>}/>
             <Route path='/shop' element={<Shop/>}/>
             <Route path='/contact' element={<ContactCard/>}/>
           
            <Route path='/sign_up' element={
              <Grid  container spacing={4} direction="row" justifyContent="center" alignItems="center">
                <Login />
                <Signup />
              </Grid>} />
          </>

        </Routes>
      </Router>
      </Provider>
    </>
  );
};

export default App;
