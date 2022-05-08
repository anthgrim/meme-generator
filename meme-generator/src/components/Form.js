import React from "react";

const Form = (props) => {
    const { buttonText } = props
    return (
        <>
            <form className="meme-form">
                <section className="form-texts">
                    <input type="text" placeholder="Upper text..." className="textbox"/>
                    <input type="text" placeholder="Lower text..." className="textbox"/>
                </section>
                <input type="submit" className="button" value={buttonText}/>
            </form>
        </>
    )
}

export default Form;