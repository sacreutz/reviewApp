import React, { Component } from "react";
import "./App.css";
import ReviewCard from "./ReviewCard";
import ReviewsPage from "./ReviewsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Data from "./jsonData.js";
import Navbar from "./NavBar";

const App = () => (
  <Router>
    <div>
      <Route
        exact
        path={["/reviews", "/"]}
        render={routerProps => {
          return (
            <div>
              <Navbar />
              <ReviewsPage reviews={Data} />
            </div>
          );
        }}
      />
      <Route
        path={`/reviews/:reviewId`}
        render={routerProps => {
          const reviewIdFromParams = routerProps.match.params.reviewId;
          //add lodash get here
          const test = Data.filter(
            review => console.log(review) || review.id === reviewIdFromParams
          )[0];
          return (
            <div>
              <Navbar />
              <ReviewCard review={test} reviewId={reviewIdFromParams} />
            </div>
          );
        }}
      />
    </div>
  </Router>
);

export default App;
