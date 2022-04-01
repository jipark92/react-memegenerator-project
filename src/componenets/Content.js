import React from "react";
import memeDatas from './memesData'


export default function Content(props) {
    const [image, setImage] = React.useState("")
    

    function test() {
        const memesArray = memeDatas.data.memes
        const random = Math.floor(Math.random()*memesArray.length)
        setImage(memesArray[random].url)
    }

    return (
        <div className="content">
            <div className="input-container">
                <input type="text" placeholder="shut up" className="input-1"/>
                <input type="text" placeholder="take my money" className="input-2"/>
            </div>
            <div className="button-container">
                <button onClick={test}>Get a new meme image</button>
            </div>
            <div className="meme-container">
                <p className="text-1"></p>
                <img src={image} alt="meme" className="meme-image"/>
                <p className="text-2"></p>
            </div>
        </div>
    )
}