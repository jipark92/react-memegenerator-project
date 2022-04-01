import React from "react";
import memeDatas from './memesData'

export default function Content() {
    const [image, setImage] = React.useState({
        randomImage:"https://i.imgflip.com/c2qn.jpg",
        topText: "",
        bottomText: ""
    })
    
    function test() {
        const memesArray = memeDatas.data.memes
        const random = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[random].url
        setImage(prevImage =>({
            ...prevImage,
            randomImage: url
        }))
    }

    function getText(e) {
        setImage(prevImage => {
            return {
                ...prevImage,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="content">
            <div className="input-container">
                <input type="text" 
                    placeholder="shut up" 
                    className="input-1" 
                    name="topText"
                    onChange={getText}
                />

                <input 
                    type="text" 
                    placeholder="take my money" 
                    className="input-2"
                    name="bottomText"
                    onChange={getText}
                />
            </div>
            <div className="button-container">
                <button onClick={test}>Get a new meme image</button>
            </div>
            <div className="meme-container">
                <p className="text-1">{image.topText}</p>

                <img src={image.randomImage} className="meme-image"/>
                
                <p className="text-2">{image.bottomText}</p>
            </div>
        </div>
    )
}