import React, { useState } from "react";
import data from "../memesData"

const Form = (props) => {
    const { buttonText } = props

    const [ meme, setMeme ] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [ allMemesImages, setAllMemesImages ] = useState(data.data.memes)

    const getImage = () => {
        const randomIndex = Math.floor(Math.random() * allMemesImages.length)
        setMeme(prevMeme => ({...prevMeme, randomImage: allMemesImages[randomIndex].url}))
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <>
            <div className="meme-form">
                <section className="form-texts">
                    <input type="text" placeholder="Upper text..." className="textbox" name="topText" onChange={handleChange}/>
                    <input type="text" placeholder="Lower text..." className="textbox" name="bottomText" onChange={handleChange}/>
                </section>
                <button className="button" onClick={getImage}>{buttonText}</button>
            </div>
            <div className="meme-wrapper">
                <img src={meme.randomImage} alt="meme" className="meme-result" ></img>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </>
    )
}

export default Form;