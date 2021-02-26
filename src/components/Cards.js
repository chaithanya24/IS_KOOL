import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Route, Router } from "react-router-dom";
import Blog from "./pages/Blog";

function Cards() {
  return (
    <div className="cards">
      <h1>Everything Begins Here!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              text="School app that connects teachers, parents and students in one place"
              label="Karunalaya"
              path="/products"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Store your certificates securely"
              label="hideit"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
