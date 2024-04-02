import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import postRequest from "../slice/controllers";
import { useNavigate } from "react-router-dom";
import Travel from "../assets/categories/Travel.svg";
import Brands from "../assets/categories/Brands.svg";
import ArtDesign from "../assets/categories/ArtDesign.png";
import Books from "../assets/categories/Books.svg";
import Games from "../assets/categories/Games.png";
import FoodDrinks from "../assets/categories/FoodDrinks.svg";
import Cars from "../assets/categories/Cars.svg";
import Species from "../assets/categories/Species.svg";
import Colors from "../assets/categories/Colors.png";
import Celebrities from "../assets/categories/Celebrities.png";
import Songs from "../assets/categories/Songs.png";
import Health from "../assets/categories/Health.png";
import Sports from "../assets/categories/Sports.svg";
import Technology from "../assets/categories/Technology.svg";
import Bikes from "../assets/categories/Bikes.svg";
import WebSeries from "../assets/categories/WebSeries.png";
import Videos from "../assets/categories/Videos.svg";
import Fashion from "../assets/categories/Fashion.svg";
import Memes from "../assets/categories/Memes.svg";
import RoleModels from "../assets/categories/RoleModels.svg";
import Interested from "../assets/categories/Interested.svg";
import Photos from "../assets/categories/Photos.svg";
import Quotes from "../assets/categories/Quotes.svg";
import Movies from "../assets/categories/Movies.svg";

export default function Categories() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const data = useSelector((state: any) => state.user.data);
  const navigate = useNavigate();
  const categoriesWithPhotos = [
    ["Travel", Travel],
    ["Brands", Brands],
    ["Art/Design", ArtDesign],
    ["Books", Books],
    ["Games", Games],
    ["Food & Drinks", FoodDrinks],
    ["Cars", Cars],
    ["Species", Species],
    ["Colors", Colors],
    ["Celebrities", Celebrities],
    ["Songs", Songs],
    ["Health", Health],
    ["Sports", Sports],
    ["Technology", Technology],
    ["Bikes", Bikes],
    ["Web Series", WebSeries],
    ["Videos", Videos],
    ["Fashion", Fashion],
    ["Memes", Memes],
    ["Role Models", RoleModels],
    ["Interested", Interested],
    ["Photos", Photos],
    ["Quotes", Quotes],
    ["Movies", Movies],
  ];

  const toggleCategory = (c: string) => {
    if (selectedCategories.includes(c))
      setSelectedCategories(selectedCategories.filter((cat) => cat !== c));
    else setSelectedCategories([...selectedCategories, c]);
  };

  const submitCategories = async () => {
    // const submitCategories = () => {
    const updatedData = { ...data, interestCategories: selectedCategories };
    try {
      const result = await postRequest("/signup", updatedData);
      if (result.token) {
        localStorage.setItem("denaurlen-token", JSON.stringify(result.token));
        navigate("/friends");
      } else alert(result);
    } catch (error) {
      console.error(error);
      alert("something went wrong");
    }
  };

  return (
    <>
      <section>
        <h2>Choose your top 10 categories</h2>
        <ul style={{ listStyleType: "none" }}>
          {categoriesWithPhotos.map((category) => (
            <div key={nanoid()} onClick={() => toggleCategory(category[0])}>
              <span
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {selectedCategories.includes(category[0])
                  ? selectedCategories.indexOf(category[0]) + 1
                  : null}
              </span>
              <img src={category[1]} alt="" />
              <span
                style={{
                  backgroundColor: "white",
                  margin: "15px",
                  borderRadius: "5px",
                  color: "black",
                }}
              >
                {category[0] + " "}
              </span>
            </div>
          ))}
        </ul>
        <button
          onClick={submitCategories}
          disabled={selectedCategories.length < 10}
        >
          next
        </button>
      </section>
    </>
  );
}
