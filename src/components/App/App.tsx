import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import {Redirect, Route, Switch } from 'react-router-dom';
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import AllBooks from "../../pages/AllBooks/AllBooks";
import ReadLater from "../../pages/ReadLater/ReadLater";
import Read from "../../pages/Read/Read";
import BooksProfile from "../../pages/BooksProfile/BooksProfile";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__container">
          <Navbar />
          <Switch>
              <Route path="/allBooks" exact component={AllBooks}/>
              <Route path="/readLater" exact component={ReadLater}/>
              <Route path="/read" exact component={Read}/>
              <Route path="/home" exact component={HomePage}/>
              <Route path="/read/:id" exact component={BooksProfile} />
              <Route path="/profile" exact component={ProfilePage}/>
              <Redirect from='/' to='/home'/>
              <Route path={'*'} exact component={NotFoundPage}/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
