import { useState } from "react";
import memesData from "../memesData";
import "./Meme.css";

function Meme() {
  const [allMemeImages] = useState(memesData);
  const [meme, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  function getMemeImage(e) {
    e.preventDefault();
    const memesArray = allMemeImages.data.memes;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage:
        memesArray[Math.floor(Math.random() * memesArray.length)].url,
    }));
  }

  return (
    <main>
      <form className="MemeForm">
        <input
          className="first-text"
          name="first-text"
          type="text"
          placeholder="Top Text"
        />
        <input
          className="second-text"
          name="second-text"
          type="text"
          placeholder="Bottom Text"
        />
        <input
          onClick={getMemeImage}
          className="submit"
          type="submit"
          value="Get a new meme image"
        />
      </form>
      <div className="meme-container">
        {meme.randomImage && <img src={meme.randomImage} alt="Meme" />}
      </div>
    </main>
  );
}

export default Meme;
