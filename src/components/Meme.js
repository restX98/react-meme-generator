import { useState } from "react";
import memesData from "../memesData";
import "./Meme.css";

function Meme() {
  const [allMemeImages] = useState(memesData);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  function getMemeImage(e) {
    e.preventDefault();
    const memesArray = allMemeImages.data.memes;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage:
        memesArray[Math.floor(Math.random() * memesArray.length)].url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="MemeForm">
        <input
          className="top-text"
          name="topText"
          type="text"
          placeholder="Top Text"
          onChange={handleChange}
        />
        <input
          className="bottom-text"
          name="bottomText"
          type="text"
          placeholder="Bottom Text"
          onChange={handleChange}
        />
        <input
          onClick={getMemeImage}
          className="submit"
          type="submit"
          value="Get a new meme image"
        />
      </form>
      {meme.randomImage && (
        <div className="meme-container">
          <img src={meme.randomImage} alt="Meme" />
          <h2 className="text top">{meme.topText}</h2>
          <h2 className="text bottom">{meme.bottomText}</h2>
        </div>
      )}
    </main>
  );
}

export default Meme;
