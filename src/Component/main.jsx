import React, { useState } from "react";
import memedata from './data';

function Structure() {
    const [meme, setMeme] = useState({
        toptext: "",
        bottomtext: "",
        randomimage: "https://raw.githubusercontent.com/Lonewolfonrock/meme-gerator/main/src/assets/images/20180703190744-rollsafe-meme.jpeg"
    });

    const [allImages, setImages] = useState(memedata.data.memes);

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    function getMemeImages() {
        const randomImage = Math.floor(Math.random() * allImages.length);
        const url = allImages[randomImage].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomimage: url
        }));
    }

    return (
        <div className="main">
            <h1>Meme Generator</h1>
            <div className="form">
                <input
                    type="text"
                    placeholder="Starting Text"
                    className="textfield"
                    id="start"
                    name="toptext"
                    value={meme.toptext}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Ending Text"
                    className="textfield"
                    id="end"
                    name="bottomtext"
                    value={meme.bottomtext}
                    onChange={handleChange}
                />

                <button
                    className="form-button"
                    onClick={getMemeImages}
                >
                    Get new Meme image
                </button>
            </div>
            <div className="meme-container">
                <img src={meme.randomimage} alt="API failure: System can't load this image. Choose another image." className="img" />
                <h2 className="meme-top-text">{meme.toptext}</h2>
                <h2 className="meme-bottom-text">{meme.bottomtext}</h2>
            </div>
        </div>
    );
}

export default Structure;