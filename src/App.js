import React, { Component } from "react";
import "./App.css";
import MainContainer from "./MainContainer";
import ReviewCard from "./ReviewCard";
import ReviewList from "./ReviewList";
import ReviewsPage from "./ReviewsPage";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Data from "./jsonData.js";
import Navbar from './NavBar'

const App = () => (

  <Router>

    <div>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route
        exact
        path="/reviews"
        render={routerProps => {
          return (
            <div>
        <Navbar />
        <ReviewsPage reviews={Data} />
        </div>
          )
        }
      }
      />
      <Route
        path={`/reviews/:reviewId`}
        render={routerProps => {
           const reviewIdFromParams = routerProps.match.params.reviewId;

          console.log("routerProps", routerProps);
          console.log("match", routerProps.match);
          //add lodash get here
          const test = Data.filter(
            review => console.log(review) || review.id === reviewIdFromParams
          )[0];

          console.log("test", test);
          //  console.log("reviewId", reviewId);
          return (
          <div>
          <Navbar />
          <ReviewCard review={test} reviewId={reviewIdFromParams} />
          </div>
          )
        }}
      />
    </div>
  </Router>
);

export default App;
