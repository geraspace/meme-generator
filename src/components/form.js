import React from "react";
import { useState } from "react";

export default function Form() {

  // All data state
  const [allMemes, setAllMemes] = React.useState([]);

  // Meme state
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleClick() {
    const randomMemeIndex = Math.floor(Math.random() * allMemes.length);
    const randomMemeObject = allMemes[randomMemeIndex];
    const randomMemeUrl = randomMemeObject.url;
    setMeme((prevMeme) => {
      return {
        ...meme,
        randomImage: randomMemeUrl,
      };
    });
  }

  function handleChange(event) {
    setMeme((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
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
          {meme.randomImage==="" ? "randomize" : "Change template"}
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
