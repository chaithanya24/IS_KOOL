import React from "react";
import "../../App.css";
import CardItem from "../../components/CardItem";

export default function Contacts() {
  return (
    <div className="cards">
      <h1>Contact </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/office.jpg"
              text="10049 Park Medowd Drive #003 LoneTree Co - 80124 email: chaithanya.karnam@gmail.com"
              label="Address"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
