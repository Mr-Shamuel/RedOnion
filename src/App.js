import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import Cart from "./Components/Pages/Cart/Cart";
import Food from "./Components/Pages/Food/Food";
import PrivateRoute from "./Components/Pages/PrivateRoute/PrivateRoute";

import Header from "./Components/Shared/Header/Header";
import NotMatch from "./Components/Shared/NotMatch/NotMatch";

export const FoodContext = createContext();
function App() {

  return (
    <div className="App">


      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/food/:foodId' element={<Food />} />
        <Route path='/cart' element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        } />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotMatch />} />

      </Routes>





    </div>
  );
}

export default App;
