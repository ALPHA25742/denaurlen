import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

export default function FriendSuggestions() {
  const [suggestedFriends, setSuggestedFriends] = useState([
    { username: "emma_watson", fullname: "Emma Watson", following: false },
    { username: "pooja_hegde", fullname: "Pooja Hegde", following: false },
    { username: "eminem", fullname: "Marshal Mathers", following: false },
    { username: "akshaykumar", fullname: "Akshay Kumar", following: false },
    { username: "ava_32", fullname: "Ava", following: false },
    { username: "oliver_54", fullname: "Oliver", following: false },
    { username: "rupa_rajeshan", fullname: "Rupa Rajeshan", following: false },
    { username: "gany_varma", fullname: "Ganesh Verma", following: false },
    { username: "kiran_katore", fullname: "Kiran Katore", following: false },
    {
      username: "zeel_Fernandez",
      fullname: "Zeel Fernandez",
      following: false,
    },
  ]);

  const toggleFollow = (index: number) => {
    if (index !== -1) {
      const updatedList = [...suggestedFriends];
      updatedList[index] = {
        ...suggestedFriends[index],
        following: !suggestedFriends[index].following,
      };
      setSuggestedFriends(updatedList);
    } else {
      console.warn("Username not found in suggested friends list");
      alert("something went wrong");
    }
  };

  return (
    <>
      <h2>Suggestions for you</h2>
      <ul>
        {suggestedFriends.map((sf, index) => (
          <li
            key={nanoid()}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: "30px",
              alignItems: "center",
            }}
          >
            <img src="" alt="" />
            <div style={{ margin: "20px" }}>
              <p>{sf.username}</p>
              <p>{sf.fullname}</p>
            </div>
            <div>
              <button
                onClick={() => toggleFollow(index)}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {sf.following ? "Following" : "Follow"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          margin: "0 25px",
          borderRadius: "5px",
        }}
      >
        Next
      </button>
      <button>Skip</button>
    </>
  );
}
