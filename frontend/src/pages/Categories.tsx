import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import postRequest from "../slice/controllers";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const categories = [
    "Travel",
    "Brands",
    "Art/Design",
    "Books",
    "Games",
    "Food & Drinks",
    "Cars",
    "Species",
    "Colors",
    "Celebrities",
    "Songs",
    "Health",
    "Sports",
    "Technology",
    "Bikes",
    "Web Series",
    "Videos",
    "Fashion",
    "Memes",
    "Role Models",
    "Interested",
    "Photos",
    "Quotes",
    "Movies",
  ];
  const data = useSelector((state: any) => state.user.data);
  const navigate = useNavigate();

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
          {categories.map((category) => (
            <li
              key={nanoid()}
              onClick={() => toggleCategory(category)}
              style={{
                backgroundColor: "white",
                margin: "15px",
                borderRadius: "5px",
                color: "black",
              }}
            >
              {category + " "}
              <span
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {selectedCategories.includes(category)
                  ? selectedCategories.indexOf(category) + 1
                  : null}
              </span>
            </li>
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
