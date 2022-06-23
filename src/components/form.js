import React from "react";
import { useState } from "react";
import memesData from "../data/memesData.js";

export default function Form() {

  // All data state
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  let randomMemeUrl;
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  function handleClick() {
    const memesArray = allMemeImages.data.memes;
    const randomMemeIndex = Math.floor(Math.random() * memesArray.length);
    const randomMemeObject = memesArray[randomMemeIndex];
    randomMemeUrl = randomMemeObject.url;
    setMeme((prevMeme) => {
      return {
        ...meme,
        randomImage: randomMemeUrl,
      };
    });
  }

  function handleChange(event) {
    setMeme(prevState => {
      return{
        ...prevState,
        [event.target.name]: event.target.value
      }
    });
  }

  return (
    <div className="form">
      <div className="form_inputs">

        <input
          name="topText"
          onChange={handleChange}
          className="form_input"
          placeholder="Above"
          // Controlled components - React is controlling the value, not just mirroring it. 
          value={meme.topText}
          ></input>

        <input
          name="bottomText"
          onChange={handleChange}
          className="form_input"
          placeholder="Obviously, below"
          value={meme.bottomText}
        ></input>

        <button onClick={handleClick} className="form_button">
          Change template
        </button>
      </div>
      <div className="form_image_container">
        <h1 className="form_image_top_text">{meme.topText}</h1>
        <img className="form_image" src={meme.randomImage} />{" "}
        <h1 className="form_image_bottom_text">{meme.bottomText}</h1>
      </div>
    </div>
  );
}
