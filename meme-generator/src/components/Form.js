import React, { useState } from "react";
import data from "../memesData"

const Form = (props) => {
    const { buttonText } = props

    const [ meme, setMeme ] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [ allMemesImages, setAllMemesImages ] = useState(data.data.memes)

    const getImage = () => {
        const randomIndex = Math.floor(Math.random() * allMemesImages.length)
        setMeme(prevMeme => ({...prevMeme, randomImage: allMemesImages[randomIndex].url}))
    }
 
    return (
        <>
            <div className="meme-form">
                <section className="form-texts">
                    <input type="text" placeholder="Upper text..." className="textbox"/>
                    <input type="text" placeholder="Lower text..." className="textbox"/>
                </section>
                <button type="submit" className="button" onClick={getImage}>{buttonText}</button>
                <img src={meme.randomImage} alt="meme" className="meme-result" ></img>
            </div>
        </>
    )
}

export default Form;