import React, { useState } from "react";
import data from "../memesData"

const Form = (props) => {
    const { buttonText } = props
    const memesArray = data.data.memes;
    const [ image, setImage ] = useState();

    const randomIndex = Math.floor(Math.random() * memesArray.length)

    const getImage = () => {
        setImage(memesArray[randomIndex].url)
    }

    return (
        <>
            <div className="meme-form">
                <section className="form-texts">
                    <input type="text" placeholder="Upper text..." className="textbox"/>
                    <input type="text" placeholder="Lower text..." className="textbox"/>
                </section>
                <button type="submit" className="button" onClick={getImage}>{buttonText}</button>
                <img src={image} className="meme-result" ></img>
            </div>
        </>
    )
}

export default Form;