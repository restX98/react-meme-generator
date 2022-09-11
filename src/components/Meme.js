import memesData from "../memesData";
import "./Meme.css";

function Meme() {
  function getMemeImage(e) {
    e.preventDefault();
    const memesArray = memesData.data.memes;
    console.log(memesArray[Math.floor(Math.random() * memesArray.length)].url);
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
    </main>
  );
}

export default Meme;
